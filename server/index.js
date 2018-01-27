const express = require('express');
const session =require('express-session');
const bodyParser = require('body-parser');
require('dotenv').config();
const checkForSession = require('./middlewares/checkForSession')
const sc = require('./controllers/swag_controller');
const ac = require('./controllers/auth_controller');

const app = express();
app.use(bodyParser.json());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));
app.use(checkForSession);

app.get('/api/swag', sc.read);
app.post('/api//login',ac.login);
app.post('/api/register', ac.register);
app.post('/api/signout', ac.signOut);
app.get('/api/user',ac.getUser);


const port = process.env.PORT||3000;
app.listen(port, ()=>console.log(`"Asuh duuu" - port${port}`))