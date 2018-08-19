
# Dr.Watson@home
### A simple intruder detector bot using JavaScript and RaspberryPi 
World famous Sherlock Homes friend Dr. Watson will send  message on slack channel about some body at home , we can have photo of intruder but he need Sherlock for that & he is busy with other cases so message is sufficient for now.
#### Prerequisite
1.	Raspberry pi :- A small and affordable computer that you can use to learn programming https://www.raspberrypi.org/
2.	PIR sensor: - A passive infrared sensor is an electronic sensor that measures infrared light radiating from objects in its field of view. They are most often used in motion detectors.
3.	Breadboard: - Used for prototyping electronics, it allows you to create circuits without soldering.
4.	Jumper wires (not actually jumping wire just normal wire but some want a fancy name).
#### Steps to have Dr. Watson in action,
1.	Create a simple webhook on your slack channel detail steps follow on https://api.slack.com/incoming-webhooks
2.	Install latest version of node and npm on raspberry pi using following article                 https://thisdavej.com/beginners-guide-to-installing-node-js-on-a-raspberry-pi
3.	Assemble circuit with reference to raspberry pi tutorial page https://projects.raspberrypi.org/en/projects/physical-computing/13
[![N|Solid](https://projects-static.raspberrypi.org/projects/physical-computing/0cb2cbd34292a05a668aeea3f291ceb3c7d9cd83/en/images/pir_wiring.png)](https://nodesource.com/products/nsolid)
(They have python code its good, but we have similar logic written JavaScript)  
4.	Create new directory and clone this repo and install dependency using 
```sh
$ sudo npm install
```
5.	Edit `confg.js` file to add parameters and start project with
```sh
$ sudo npm start 
``` 