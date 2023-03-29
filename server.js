require('dotenv').config();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const server = require('express')();
const routes = require('./routes');
const port = process.env.PORT;
const AdminJS = require('adminjs');
const AdminJSMongoose = require('@adminjs/mongoose');
const AdminJSExpress = require('@adminjs/express');
const { userSchema, sessionSchema, savedRequestSchema, profileSchema, requestSchema, configSchema } = require('./schema');
const session = require('express-session');

mongoose.connect(process.env.MONGO_DB_STRING);


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
        secret: process.env.JWT_ACCESS_TOKEN_SECRET,
    }));

    server.use(admin.options.rootPath, AdminJSExpress.buildAuthenticatedRouter(admin, {
        authenticate: async (email, password) => {
            if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
                return {
                    email: process.env.ADMIN_EMAIL,
                };
            }
            return null;
        },
    }));

    server.use(bodyParser.urlencoded({ extended: true }));
    server.use(bodyParser.json());
    server.use(routes);

    server.listen(port, () => {
        console.log(`Server ready at http://localhost:${port}`);
    });
});

