/*
    This script retrive data in board and make an request to save de data 
*/

const SerialPort = require('serialport');
const Request = require('request-promise');
const ReadLine = SerialPort.parsers.Readline;

process.on('unhandledRejection', (reason, promise) => {
    console.log('Unhandled Rejection at:', reason.stack || reason)
});

SerialPort.list().then(listDevices => {
    const listArduinoDevices = listDevices.filter(device => {
        return device.vendorId === "2341" && device.productId === "0043";
    });

    if (listArduinoDevices.length != 1) {
        return Promise.reject('The Arduino was not connected or has many boards connected');
    }

    const portName = listArduinoDevices[0].comName;

    console.log(`Arduino found in the COM ${portName}`);

    return portName;

}).then(portName => {
    const arduino = new SerialPort(portName, { baudRate: 9600 });

    const parser = new ReadLine();
    arduino.pipe(parser);

    parser.on('data', (data) => {
        Request.post(`http://localhost:3000/samples`,
            {
                headers: {
                    'Content-Type': 'application/json'
                },
                body: {
                    value: parseFloat(data.toString().substring())
                },
                json: true,
                resolveWithFullResponse: true
            }).then(response => {
                if (response.statusCode !== 201)
                    return Promise.reject(new Error(`Error to send data (StatusCode: ${response.statusCode}`));

                return Promise.resolve();
            }).catch(error => {
                console.log(error.message);
            });
    });
    return Promise.resolve();
}).catch((error) => {
    console.log(error.message);
});