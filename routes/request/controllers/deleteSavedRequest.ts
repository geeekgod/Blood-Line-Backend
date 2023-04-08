import { profileSchema as Profile, requestSchema as Request, savedSchema as Saved } from '../../../schema';

export const deleteSavedRequest = async (req: any, res: any) => {
    try {
        const { requestId } = req.body;
        //@ts-ignorets
        await Saved.delete({
            requestId,
            profileId: req.user._id,
        });

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
export default deleteSavedRequest;