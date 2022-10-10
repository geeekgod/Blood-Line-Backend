const { userSchema: User, profileSchema: Profile, requestSchema: Request } = require('../../../schema');

const nearRequest = async (req, res) => {
    try {
        const { lat, long } = req.body;

        const user = await User.findOne({ uid: req.user.uid });
        const profile = await Profile.findOne({ uid: user.uid });

        if (!profile) return res.status(404).json({ success: false, message: "profile doesn't exist" })

        if (!lat || !long) return res.status(400).json({ success: false, message: "incomplete data" })

        const requests = await Request.aggregate([{
            $geoNear: {
                near:
                {
                    type: "Point",
                    coordinates: [long, lat]
                },
                distanceField: "dist.calculated",
                maxDistance: 10000,
                includeLocs: "dist.location", spherical: true
            }
        }])

        if (!requests) throw { message: "Unable to get near requests" };

        return res.status(200).json({
            success: true,
            data: requests,
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}

module.exports = nearRequest;