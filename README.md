
# Dr.Watson@home
### A simple intruder detector bot using JavaScript and RaspberryPi 
World famous Sherlock Homes' friend Dr.Watson is ready to send message when somebody unwanted found inside your home, 
we can have a photo of intruder, since Dr.Watson may not provide solution like Sherlok Homes. Anyway he can work like
Beta Detective. And perfect version may be in next episode ..
#### Prerequisite
1.	Raspberry pi :- A small and affordable computer that you can use to learn programming
	https://www.raspberrypi.org/
2.	PIR sensor: - A passive infrared sensor is an electronic sensor that measures infrared light radiating from objects in its field of view. They are most often used in motion detectors.
    https://learn.adafruit.com/pir-passive-infrared-proximity-motion-sensor?view=all
3.	Breadboard: - Used for prototyping electronics, it allows you to create circuits without soldering.
4.	Jumper wires
#### Steps to have Dr.Watson in action,
1.	Create a simple webhook on your slack channel detail steps follow on
    https://api.slack.com/incoming-webhooks
2.	Install latest version of node and npm on raspberry pi using following article
    https://thisdavej.com/beginners-guide-to-installing-node-js-on-a-raspberry-pi
3.	Assemble circuit with reference to raspberry pi tutorial page https://projects.raspberrypi.org/en/projects/physical-computing/13
(They have python code its good, but we have similar logic written JavaScript) 
    [![N|Solid](https://projects-static.raspberrypi.org/projects/physical-computing/0cb2cbd34292a05a668aeea3f291ceb3c7d9cd83/en/images/pir_wiring.png)](https://nodesource.com/products/nsolid)
 
4.	Create new directory and clone this repo and install dependency using 
```sh
    $ sudo npm install
```
5.	Edit `confg.js` file to add parameters and start project with
```sh
    $ sudo npm start 
``` 
and now Dr.Watson is Ready!!
	![N|Solid](https://github.com/IngaleJ/DrWatson/blob/4444c2f2c5a9b81721e557efbb609d32c9832460/DrWatson.PNG)
