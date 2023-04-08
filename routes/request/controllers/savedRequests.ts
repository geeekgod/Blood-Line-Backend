import { userSchema as User, requestSchema as Request, savedRequestSchema as SavedRequest } from '../../../schema';

export const savedRequests = async (req: any, res: any) => {
  try {
    const user = await User.findOne({ uid: req.user.uid })
    if (!user) return res.status(401).json({ success: false, message: 'Not Authorized' });

    const savedRequestsData = await SavedRequest.find({ uid: user.uid });

    const completeSavedRequests = await Request.find({ _id: savedRequestsData.map((e) => e.requestId) })

    return res.status(200).json({
      success: true,
      data: completeSavedRequests
    })
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message,
    })
  }
}

export default savedRequests;