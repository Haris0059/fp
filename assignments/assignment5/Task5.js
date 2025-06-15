const TimeTracker = (times) => {
    let _times = times;

    return {
        filterLong: function() {
            _times = _times.filter(time => time > 30);
            return this;
        },
        convertToHours: function() {
            _times = _times.mape(time => time / 60);
            return this;
        },
        totalTime: function() {
            const total = _times.reduce((sum, num) => sum += num, 0);
            return this;
        },
        log: function() {
            console.log(_times);
            return this;
        }
    };
};