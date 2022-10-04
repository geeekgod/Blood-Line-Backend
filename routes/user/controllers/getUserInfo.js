const { userSchema: User } = require('../../../schema');

const getUserInfo = async (req, res) => {
    try {
        const user = await User.findById(req.user._id)

        user.token = undefined;
        user.google_id = undefined;
        user.access_token = undefined;

        return res.status(200).json({
            success: 1,
            data: user,
        })
    } catch (error) {
        return res.status(500).json({
            success: 0,
            message: error.message,
        })
    }
}

module.exports = getUserInfo;