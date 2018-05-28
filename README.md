```
This script is in a beta version. All improvement points are listed in the issues tab.
```

# Arduino Serial Read
Creates an API capable of performing operations of average per unit time based on a set of data.

The data comes from sensors connected in the Arduino, which in turn send data to 9600 baud through the serial port, where a script obtains this data and feeds the API with them.

## Installation:
Attention: Node `8.9.4` and npm `5.6.0` are required

Initially it is necessary to clone the repository
```
$ git clone https://github.com/rubensmg/arduino-serial-read.git
```

After that, open two terminals, one for initialization of the API and another for initialization of the script. With this, execute the following command:
Terminal 1 (API):
```
$ npm api
```
Terminal 2 (Script):
```
$ node ./board.js
```

To stop the running, press `Ctrl+C` in terminals.

## Using
A simple description of all endpoints in API
- GET `/samples`: List all samples stored in API;
- POST `/samples`: Include a new sample
- GET `/samples/average`: Calculate the average of all samples;
- GET `/samples/average/second`: Calculate the average by second and categorize it;
- GET `/samples/average/minute`: Calculate the average by minute and categorize it;
- GET `/samples/average/hour`: Calculate the average by hour and categorize it