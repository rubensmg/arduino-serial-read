const { SampleModel } = require('../models/sampleModel');
const sampleModel = new SampleModel();

const getSamples = (request, reply) => {
    return reply.response(sampleModel.samples).code(200);
};

const insertSample = (request, reply) => {
    const { value } = request.payload;

    sampleModel.push(value);

    return reply.response().code(201);
};

const getAverageSamples = (request, reply) => {
    return reply.response({ total: sampleModel.average }).code(200);
}

const getAverageSamplesSecond = (request, reply) => {
    const listAverageSeconds = {};

    sampleModel.averageSeconds.forEach((sample, index) => {
        listAverageSeconds[`Second ${index}`] = {
            average: parseFloat(sample.average.toFixed(2)),
            seconds: sample.seconds
        };
    });

    return reply.response(listAverageSeconds).code(200);
}

const getAverageSamplesMinute = (request, reply) => {
    const listAverageMinutes = {};

    sampleModel.averageMinutes.forEach((sample, index) => {
        listAverageMinutes[`Minute ${index}`] = {
            average: parseFloat(sample.average.toFixed(2)),
            seconds: sample.seconds
        };
    });

    return reply.response(listAverageMinutes).code(200);
}

const getAverageSamplesHour = (request, reply) => {
    const listAverageHours = {};

    sampleModel.averageHours.forEach((sample, index) => {
        listAverageHours[`Hour ${index}`] = {
            average: parseFloat(sample.average.toFixed(2)),
            seconds: sample.seconds
        };
    });

    return reply.response(listAverageHours).code(200);
}

module.exports = {
    getSamples,
    insertSample,
    getAverageSamples,
    getAverageSamplesSecond,
    getAverageSamplesMinute,
    getAverageSamplesHour
};