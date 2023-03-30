require('dotenv').config();
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
const server = require('express')();
import routes from './routes';
const port = process.env.PORT;
import AdminJS from 'adminjs';
import AdminJSMongoose from '@adminjs/mongoose';
import AdminJSExpress from '@adminjs/express';
import { userSchema, sessionSchema, savedRequestSchema, profileSchema, requestSchema, configSchema } from './schema';
import session from 'express-session';

mongoose.connect(process.env.MONGO_DB_STRING!);


const dashboard = {
    component: AdminJS.bundle('./admin/dashboard'),
};

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', async () => {
    await db.collection('requests').createIndex({ location: '2dsphere' });
    console.log('DB connected successfully');

    const adminJsOptions = {
        dashboard,
        resources: [
            userSchema,
            sessionSchema,
            profileSchema,
            requestSchema,
            savedRequestSchema,
            configSchema
        ],
        rootPath: '/admin',
        branding: {
            companyName: 'BloodLine Admin',
        },
    };

    AdminJS.registerAdapter({
        Resource: AdminJSMongoose.Resource,
        Database: AdminJSMongoose.Database,
    });
    const admin = new AdminJS(adminJsOptions);
    admin.watch()

    server.use(cors({
        origin: true,
        credentials: true,
        methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization'],
        preflightContinue: true,
    }));
    server.use(session({
        secret: process.env.JWT_ACCESS_TOKEN_SECRET as string, //this
    }));

    server.use(admin.options.rootPath, AdminJSExpress.buildAuthenticatedRouter(admin, {
        authenticate: async (email: string, password: string) => {
            if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
                return {
                    email: process.env.ADMIN_EMAIL,
                };
            }
            return null;
        },
        cookiePassword: '' //dont know
    }));

    server.use(bodyParser.urlencoded({ extended: true }));
    server.use(bodyParser.json());
    server.use(routes);

    server.listen(port, () => {
        console.log(`Server ready at http://localhost:${port}`);
    });
});

