const { userSchema: User } = require('../../../schema');

const getUserInfo = async (req, res) => {
    try {
        const user = await User.findOne({ uid: req.user.uid })
        return res.status(200).json({
            success: true,
            data: user,
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}

module.exports = getUserInfo;