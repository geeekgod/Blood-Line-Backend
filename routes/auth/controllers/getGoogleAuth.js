const oauth2 = require('simple-oauth2');
const { AuthorizationCode } = oauth2;

const service = {
    key: 'google',
    title: 'Google',
    client: {
        client: {
            id: process.env.GOOGLE_CLIENT_ID,
            secret: process.env.GOOGLE_CLIENT_SECRET,
        },
        auth: {
            tokenHost: process.env.GOOGLE_TOKEN_HOST,
            tokenPath: process.env.GOOGLE_TOKEN_PATH,
            authorizePath: process.env.GOOGLE_AUTHORIZE_PATH,
        }
    },
    service: {
        scope: ['profile', 'email', 'openid']
    },
    options: {
        client_id: process.env.GOOGLE_CLIENT_ID,
        client_secret: process.env.GOOGLE_CLIENT_SECRET,
        grant_type: 'authorization_code',
    }
}

const getGoogleAuthorizeUrl = async (redirectUri) => {
    let client = new AuthorizationCode(service.client);
    const authorizationUri = client.authorizeURL({
        scope: service.service.scope,
        redirect_uri: redirectUri,
    });
    return authorizationUri;
}

const getGoogleAuth = async (req, res) => {
    try {
        // URL = HTTP://LOCALHOST:3000/AUTH/GOOGLE/CALLBACK/
        const authorizationUri = await getGoogleAuthorizeUrl(`${process.env.IN_BASE_URL}${process.env.GOOGLE_REDIRECT_URI}`);
        return res.status(200).json({
            success: 1,
            data: authorizationUri,
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: 0,
            message: error.message,
        })
    }
}

module.exports = getGoogleAuth;