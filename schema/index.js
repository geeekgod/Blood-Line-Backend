const sessionSchema = require('./session.schema')
const userSchema = require('./user.schema')
const profileSchema = require('./profile.schema')
const requestSchema = require('./request.schema')
const savedRequestSchema = require('./savedRequest.schema')
const configSchema = require('./config.schema')

module.exports = {
    userSchema,
    sessionSchema,
    profileSchema,
    requestSchema,
    savedRequestSchema,
    configSchema,
}
