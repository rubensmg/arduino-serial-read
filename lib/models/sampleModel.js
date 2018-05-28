class SampleModel {

    constructor() {
        this.__listSamples = [];
    };

    __getAverageTime(listSamples, timeBaseSeconds) {
        if (!listSamples.length)
            return [];

        let acc = 1, listTime = [];

        listSamples.forEach((value, index) => {

            if (timeBaseSeconds * acc === index) {
                listTime[acc - 1].average /= timeBaseSeconds;
                acc++;
            }

            if (listTime[acc - 1]) {
                listTime[acc - 1].average += value;
                listTime[acc - 1].seconds++;
            }
            else {
                listTime.push({ average: value, seconds: 1 });
            }

            if (listSamples.length - 1 === index) {
                listTime[acc - 1].average /= timeBaseSeconds;
            } 
        });

        return listTime;
    }

    get samples() {
        return this.__listSamples;
    };

    get average() {
        if (!this.__listSamples.length)
            return 0;

        return this.__listSamples.reduce((acc, val) => acc + val) / this.__listSamples.length;
    };

    get averageSeconds() {
        return this.__getAverageTime(this.__listSamples, 1);
    }

    get averageMinutes() {
        return this.__getAverageTime(this.__listSamples, 60);
    }

    get averageHours() {
        return this.__getAverageTime(this.__listSamples, 3600);
    }

    push(value) {
        this.__listSamples.push(value);
    };
}

module.exports = { SampleModel };