const Home = require('./controllers/homeController');

module.exports = [
    {
        method: 'GET',
        path: '/samples',
        handler: Home.getSamples,
        config: {
            description: 'Get a list of all samples'
        }
    },
    {
        method: 'POST',
        path: '/samples',
        handler: Home.insertSample,
        config: {
            description: 'Insert a new sample'
        }
    },
    {
        method: 'GET',
        path: '/samples/average',
        handler: Home.getAverageSamples,
        config: {
            description: 'Get the average of samples'
        }
    },
    {
        method: 'GET',
        path: '/samples/average/second',
        handler: Home.getAverageSamplesSecond,
        config: {
            description: 'Get the average of samples by second'
        }
    },
    {
        method: 'GET',
        path: '/samples/average/minute',
        handler: Home.getAverageSamplesMinute,
        config: {
            description: 'Get the average of samples by minute'
        }
    },
    {
        method: 'GET',
        path: '/samples/average/hour',
        handler: Home.getAverageSamplesHour,
        config: {
            description: 'Get the average of samples by hour'
        }
    }
];