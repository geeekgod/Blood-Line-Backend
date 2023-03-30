import jwt from 'jsonwebtoken';

const isLoggedIn = async (req: any, res: any, next: any) => {
    try {
        const bearerToken = req.headers.authorization;
        const token = bearerToken.slice(7);

        if (token === null) {
            return res.status(401).json({
                success: false,
                message: 'Not Authorized',
            });
        }

        const user = jwt.verify(bearerToken, process.env.JWT_ACCESS_TOKEN_SECRET as string);
        req.user = user;
        next();

    } catch (error) {
        return res.status(401).json({
            success: false,
            message: 'Not Authorized',
        });
    }
}

export default isLoggedIn