console.log('using environment: ' + process.env.ELEVENTY_ENV);

var _API_URL;

switch (process.env.ELEVENTY_ENV) {
    case 'local':
        _API_URL = 'http://localhost:1337/';
        break;
    case 'prod':
        _API_URL = 'http://localhost:1337/';
        break;
    case 'stage':
        _API_URL = 'http://localhost:1337/';
        break;
    default:
        _API_URL = 'http://localhost:1337/';
        break;
}

console.log('API url: ' + _API_URL);

module.exports = {
    environment: process.env.ELEVENTY_ENV,
    API_URL: _API_URL,
}