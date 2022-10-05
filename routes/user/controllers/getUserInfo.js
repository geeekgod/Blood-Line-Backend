const { userSchema: User } = require('../../../schema');

const getUserInfo = async (req, res) => {
    try {
        const user = await User.findOne({ uid: req.user.uid })
        console.log(user);
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