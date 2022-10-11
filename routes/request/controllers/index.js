const createRequest = require('./createRequest');
const getRequests = require('./getRequests');
const saveRequests = require('./saveRequests');
const deleteSavedRequest = require('./deleteSavedRequest');

module.exports = {
    getRequests,
    createRequest,
    saveRequests,
    deleteSavedRequest,
}