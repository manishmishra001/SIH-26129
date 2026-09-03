// External modules
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const session = require('express-session');
const mongodbstore = require('connect-mongodb-session')(session);



const DB_URL = "mongodb+srv://manish1525t_db_user:K0uEYHHgV6jNQatm@cluster0.ybr7buf.mongodb.net/";

// Routes
const citizenRouter = require('./routes/citizenRouter');
const officerRouter = require('./routes/officerRouter');
const authRouter = require('./routes/authRouter');

// Body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));


const store = new mongodbstore({
    uri: DB_URL,
    collection: 'sessions'
});


app.use(session({
    secret: 'SIH-PORBLEM-SOLUTION', // Replace with a strong secret key
    resave: false,
    saveUninitialized: false,
    store : store
}));


app.use((req, res, next) => {
    const isLoggedIn = req.session.isLoggedIn;
    next();
});

// View engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));




// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/auth', authRouter);
// app.use("/citizen",(req,res,next)=>{
//     if(req.isLoggedIn){
//         next();}
//     else{
//         res.redirect('/auth/citizenlogin');
//     }
// });
app.use('/', citizenRouter);

app.use("/officer",(req,res,next)=>{
    if(req.session.isLoggedIn){
        next();
    }else{
        res.redirect('/auth/officerlogin');
    }
});
app.use('/officer', officerRouter);


const port = 3000;



mongoose.connect(DB_URL).then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`);
    });
}).catch((err) => {
    console.error("Error connecting to MongoDB:", err);
});