import { userSchema as User, profileSchema as Profile, requestSchema as Request } from '../../../schema';

export const createRequest = async (req: any, res: any) => {
    try {
        const { city, pin, bloodGroup, address, lat, long } = req.body;

        const user = await User.findOne({ uid: req.user.uid });
        const profile = await Profile.findOne({ uid: user?.uid }); //here

        if (!profile) return res.status(404).json({ success: false, message: "profile doesn't exist" })

        if (!city || !bloodGroup || !pin || !address || !lat || !long) return res.status(400).json({ success: false, message: "incomplete data" })

        const newRequest = await Request.create({
            uid: profile.uid,
            name: user?.name,
            email: user?.email,
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
    } catch (error: any) {
        return res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}

export default createRequest;