const { userSchema: User, profileSchema: Profile, requestSchema: Request } = require('../../../schema');

const createRequest = async (req, res) => {
    try {
        const { city, pin, bloodGroup, address, lat, long } = req.body;

        const user = await User.findOne({ uid: req.user.uid });
        const profile = await Profile.findOne({ uid: user.uid });

        if (!profile) return res.status(404).json({ success: false, message: "profile doesn't exist" })

        if (!city || !bloodGroup || !pin || !address || !lat || !long) return res.status(400).json({ success: false, message: "incomplete data" })

        const newRequest = await Request.create({
            uid: profile.uid,
            name: user.name,
            email: user.email,
            phone: profile.phone,
            address: address,
            city: city,
            pin: pin,
            bloodGroup: bloodGroup,
            location: [long, lat]

        })

        if (!newRequest) throw { message: "Unable to create request" };

        return res.status(200).json({
            success: true,
            data: newRequest,
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}

module.exports = createRequest;