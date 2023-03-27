const { configSchema: Config } = require('../../../schema');

const getConfigInfo = async (req, res) => {
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
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    })
  }
}

module.exports = getConfigInfo;
