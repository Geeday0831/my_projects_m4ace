function errorHandler(req, res, next, err) {
    console.error(`error found ${err.message}`);
    res.status(500).json({
        message: 'an error found'
    });
}

module.exports = errorHandler;