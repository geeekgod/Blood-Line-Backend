const { default: axios } = require("axios");
const { AuthorizationCode } = require("simple-oauth2");
const { userSchema: User } = require('../../../schema');

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


const createToken = async (user, secret, expiresIn) => {
    const {
        email,
    } = user
    return jwt.sign({
        id, email, role, companyIds,
    }, secret, { expiresIn })
}

const getGoogleAccessToken = async (req, redirectUri) => {
    try {
        let client = new AuthorizationCode(service.client);
        const { code } = req.query;
        const result = await client.getToken({
            ...service.options,
            code,
            redirect_uri: redirectUri,
        }, { json: true });
        const userResponse = await axios.get(process.env.GOOGLE_USER_INFO_URI, {
            headers: {
                'Authorization': `Bearer ${result.token.access_token}`
            }
        });
        return { userResponse, result }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: 0,
            message: error.message,
        })
    }
}

const createGoogleAuthUser = async (req, res) => {
    try {
        const { userResponse, result } = await getGoogleAccessToken(`${process.env.IN_BASE_URL}${process.env.GOOGLE_REDIRECT_URI}`);
        const { data: google } = userResponse

        const userInput = {
            first_name: google.given_name,
            last_name: google.family_name,
            email: google.email,
            access_token: result.token.access_token,
            google_id: google.id,
            image_url: google.picture,
        }

        // Mongodb storage
        let user = await User.find({
            email,
        })

        if (!user) {
            user = await User.create(userInput);
        }

        const token = await createToken(user, process.env.SECRET, '7d');

        res.setHeader('authorization', token);

        return res.redirect(`${process.env.FRONT_END_URL}/login?token=${token}`);


    } catch (error) {
        console.log(error);
        return res.redirect(`${process.env.FRONT_END_URL}/login?error=${error.message}`);
    }
}

module.exports = createGoogleAuthUser;