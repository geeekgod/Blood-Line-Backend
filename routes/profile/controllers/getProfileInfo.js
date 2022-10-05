const { userSchema: User, profileSchema: Profile } = require('../../../schema');

const getProfileInfo = async (req, res) => {
    try {
        const user = await User.findOne({ uid: req.user.uid })
        const profile = await Profile.findOne({ uid: user.uid })

        if (!profile) return res.status(404).json({ success: false, message: "profile not found" })

        return res.status(200).json({
            success: true,
            data: profile,
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}

module.exports = getProfileInfo;