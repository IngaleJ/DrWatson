// This is brain and eyes of DrWatson
// Get required GPIO module from onOff
import {Gpio} from 'onoff'
import {sendMsg} from './messanger'
import config from './config'

// Sensor
const pin = config && config.pin ? config.pin : 4
const sensor = new Gpio(pin, 'in', 'both')
const defaultMsg = 'Be alert my dear friend, some one is here'
// onOff provide method => watch(callback)
// https://github.com/fivdi/onoff#watchcallback
sensor.watch(function (err, value) {
  if (err) exit()
  console.log('Dr. watson keeping watch')
  if (value) {
    console.log(config.customMsg || defaultMsg)
    sendMsg(config.webhookUrl, config.customMsg || defaultMsg)
  }
})

console.log('Dr Watson is ready !')

function exit () {
  console.log('Somethings went wrong !!!')
  sensor.unexport()
  process.exit()
}
