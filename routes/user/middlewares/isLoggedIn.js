const jwt = require('jsonwebtoken')

const isLoggedIn = async (req, res, next) => {
    try {
        const bearerToken = req.headers.authorization;
        const token = bearerToken.slice(7);

        if (token === null) {
            return res.status(500).json({
                success: 0,
                message: 'Not Authorized',
            });
        }

        const user = jwt.verify(token, process.env.SECRET);
        req.user = user;
        next();

    } catch (error) {
        return res.status(500).json({
            success: 0,
            message: 'Not Authorized',
        });
    }
}

module.exports = isLoggedIn