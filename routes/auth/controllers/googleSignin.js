const jwt = require('jsonwebtoken');
const { userSchema: User } = require('../../../schema');

const createToken = async (user, secret, expiresIn) => {
    const {
        _id, email,
    } = user
    return jwt.sign({
        _id, email,
    }, secret, { expiresIn })
}

const googleSignin = async (req, res) => {
    try {

        const { first_name, last_name, email, image_url, token, google_id, access_token, } = req.body;

        let user = await User.findOne({
            email,
        })

        if (!user) {
            user = await User.create({
                first_name, last_name, email, image_url, token, google_id, access_token,
            });

            const bearer_token = await createToken(user, process.env.SECRET, '7d');

            return res.status(200).json({
                success: 1,
                is_complete: false,
                bearer_token,
            });
        }

        if (user.token === token) {
            const bearer_token = await createToken(user, process.env.SECRET, '7d');
            return res.status(200).json({
                success: 1,
                is_complete: user.is_complete,
                bearer_token,
            });
        }

        return res.status(500).json({
            success: 0,
            message: 'Not Authorized',
        });

    } catch (error) {
        return res.status(500).json({
            success: 0,
            message: error.message,
        });
    }
}

module.exports = googleSignin;