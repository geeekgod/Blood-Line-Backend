import { userSchema as User, profileSchema as Profile } from '../../../schema';

export const createProfile = async (req: any, res: any) => {
    try {
        const { phone, city, pin, bloodGroup } = req.body;

        const user = await User.findOne({ uid: req.user.uid });
        const profile = await Profile.findOne({ uid: user?.uid });

        if (profile) return res.status(400).json({ success: false, message: "profile already exists" })

        if (!phone || !city || !bloodGroup) return res.status(400).json({ success: false, message: "incomplete data" })

        const newProfile = await Profile.create({
            uid: user?.uid,               //here
            phone: phone,
            city: city,
            pin: pin ? pin : "",
            bloodGroup: bloodGroup
        })

        if (!newProfile) throw { message: "Unable to create profile" };

        const newUser = await User.findOneAndUpdate({
            uid: newProfile.uid
        }, {
            isProfile: true
        }, {
            new: true
        })

        if (!newUser) throw { message: "Unable to update user" }

        return res.status(200).json({
            success: true,
            data: newProfile,
        })
    } catch (error: any) {
        return res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}

export default createProfile;