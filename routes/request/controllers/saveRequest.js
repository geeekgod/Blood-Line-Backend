const { userSchema: User, requestSchema: Request, savedRequestSchema: SavedRequest } = require('../../../schema');

const saveRequest = async (req, res) => {
  try {
    const { requestId } = req.query;
    const user = await User.findOne({ uid: req.user.uid })
    if (!user) return res.status(401).json({ success: false, message: 'Not Authorized' });

    const request = await Request.findById(requestId);

    if (!request) return res.status(404).json({ success: false, message: "request not found" })

    const savedRequest = await SavedRequest.findOne({ requestId: request._id, uid: user.uid });

    if (savedRequest) {
      await SavedRequest.deleteOne({ requestId: request._id })
      return res.status(200).json({
        success: true,
        message: "message unsaved"
      })
    }

    const newSavedRequest = await SavedRequest.create({ uid: user.uid, requestId: request._id })

    if(!newSavedRequest) return res.status(500).json({success: false, message: "Not able to save the request"})

    return res.status(200).json({
      success: true,
      message: "message saved"
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    })
  }
}

module.exports = saveRequest;