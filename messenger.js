var request = require('request')
var createPayload = function (msg) {
  return (
    {
      'channel': '#webhook',
      'username': 'Dr.Watson',
      'text': `${msg}. This is posted to #webhook and comes from a Dr.Watson at ${new Date()}`
    }
  )
}

export function sendMsg (url, msg) {
  console.log('Sending message to slack chanel')
  var payload = createPayload(msg)
  request.post({
    headers: {'content-type': 'application/json'},
    url: url,
    json: payload,
    data: payload}
    , function (error, response, body) {
    console.log(error, body)
  })
}
