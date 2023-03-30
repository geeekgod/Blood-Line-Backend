import { userSchema as User } from '../../../schema';
//@ts-ignore
export const getUserInfo = async (req, res) => {
    try {
        const user = await User.findOne({ uid: req.user.uid })
        return res.status(200).json({
            success: true,
            data: user,
        })
    } catch (error: any) {
        return res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}

export default getUserInfo;