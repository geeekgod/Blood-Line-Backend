import { userSchema as User, requestSchema as Request } from '../../../schema';

export const getRequests = async (req: any, res: any) => {
  try {
    const user = await User.findOne({ uid: req.user.uid })
    if (!user) return res.status(401).json({ success: false, message: 'Not Authorized' });

    const requests = await Request.find();

    return res.status(200).json({
      success: true,
      data: requests,
    })
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message,
    })
  }
}

export default getRequests;