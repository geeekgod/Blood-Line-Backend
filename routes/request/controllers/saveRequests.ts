import { profileSchema as Profile, requestSchema as Request, savedSchema as Saved } from '../../../schema';

export const saveRequests = async (req: any, res: any) => {
    try {
        const { requestIds = [] } = req.body;

        let saves: Array<any> = []; //here
        requestIds.map((requestId: any) => saves.push({ profileId: req.user._id, requestId, }));

        await Saved.create(saves);

        return res.status(200).json({
            success: true,
            message: "requests saved successfully",
        })
    } catch (error: any) {
        return res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}

export default saveRequests;