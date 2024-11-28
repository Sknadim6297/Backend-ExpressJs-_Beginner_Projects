
const requestLogger = (req, res, next) => {
    res.send('Request received');
};

module.exports = requestLogger;