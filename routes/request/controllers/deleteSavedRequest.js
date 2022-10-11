const { profileSchema: Profile, requestSchema: Request, savedSchema: Saved } = require('../../../schema');

const deleteSavedRequest = async (req, res) => {
    try {
        const { requestId } = req.body;

        await Saved.delete({
            requestId,
            profileId: req.user._id,
        });

        return res.status(200).json({
            success: true,
            message: "requests saved successfully",
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}

module.exports = deleteSavedRequest;