const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const authRouter = require('./routes/admin/auth');



const app = express();
// console.log(app)
app.use(express.urlencoded({ extended: true }));
app.use(cookieSession({
    keys: ['7d7asd6a76asdhasjdhvabdda']
}));

app.use(authRouter);

app.listen(3200, () => {
    console.log('Listening')
});

// 
