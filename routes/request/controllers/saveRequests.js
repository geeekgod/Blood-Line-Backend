const { profileSchema: Profile, requestSchema: Request, savedSchema: Saved } = require('../../../schema');

const saveRequests = async (req, res) => {
    try {
        const { requestIds = [] } = req.body;

        let saves = [];
        requestIds.map(requestId => saves.push({ profileId: req.user._id, requestId, }));

        await Saved.create(saves);

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

module.exports = saveRequests;