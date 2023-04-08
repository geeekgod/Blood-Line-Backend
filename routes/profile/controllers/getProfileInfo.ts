import { userSchema as User, profileSchema as Profile } from '../../../schema';

export const getProfileInfo = async (req: any, res: any) => {
    try {
        const user = await User.findOne({ uid: req.user.uid })
        const profile = await Profile.findOne({ uid: user?.uid })

        if (!profile) return res.status(404).json({ success: false, message: "profile not found" })

        return res.status(200).json({
            success: true,
            data: profile,
        })
    } catch (error: any) {
        return res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}

export default getProfileInfo;