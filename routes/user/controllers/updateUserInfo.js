const { userSchema: User } = require('../../../schema');

const isNotEmpty = (user, details) => {
    for (const detail of details) {
        if (!user[detail] || user[detail].length === 0) {
            return false;
        }
    }

    return true;
}

const updateUserInfo = async (req, res) => {
    try {
        const { first_name, last_name, phone_number, lat, long, address, city, state, country, pincode, blood_group, image_url, } = req.body;

        let user = await User.findByIdAndUpdate(req.user._id, {
            first_name, last_name, phone_number, lat, long, address, city, state, country, pincode, blood_group, image_url,
        }, {
            new: true, omitUndefined: true, multi: false, runValidators: true,
        });

        const is_complete = isNotEmpty(user, ["first_name", "last_name", "phone_number", "lat", "long", "address", "city", "state", "country", "pincode", "blood_group", "image_url"]);
        await user.update({
            is_complete,
        })

        user = await User.findById(req.user._id);

        user.token = undefined;
        user.google_id = undefined;
        user.access_token = undefined;

        return res.status(200).json({
            success: 1,
            data: user,
        })
    } catch (error) {
        return res.status(500).json({
            success: 0,
            message: error.message,
        })
    }
}

module.exports = updateUserInfo;