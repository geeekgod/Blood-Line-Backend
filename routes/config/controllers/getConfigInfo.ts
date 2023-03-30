import { configSchema as Config } from '../../../schema';

export const getConfigInfo = async (req: any, res: any) => {
  try {
    const config = await Config.findOne({ map_box_token_active: true });

    if (!config)
      return res.status(404).json({
        success: false,
        message: "Config not found",
      });

    return res.status(200).json({
      success: true,
      data: config,
    })
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message,
    })
  }
}

export default getConfigInfo;
