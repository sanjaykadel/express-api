function logger(req, res, next) {
    console.log('Logging request:', req.method, req.url);
    next(); 
}

module.exports = logger;
