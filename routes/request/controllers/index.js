const createRequest = require('./createRequest');
const getRequests = require('./getRequests');
const nearRequest = require('./nearRequest');
const savedRequests = require('./savedRequests');
const saveRequest = require('./saveRequest');

module.exports = {
    getRequests,
    nearRequest,
    createRequest,
    saveRequest,
    savedRequests
}