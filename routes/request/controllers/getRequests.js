const { userSchema: User, requestSchema: Request } = require('../../../schema');

const getRequests = async (req, res) => {
  try {
    const user = await User.findOne({ uid: req.user.uid })
    if (!user) return res.status(401).json({ success: false, message: 'Not Authorized' });

    const requests = await Request.find();

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

module.exports = getRequests;