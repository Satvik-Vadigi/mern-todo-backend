const express = require('express');
const morgan =  require('morgan');
const dotenv = require('dotenv');
const colors = require('colors');
const cors = require('cors');
const { connect } = require('./routes/testRoute');
const connectDB = require('./config/db');

//config dotenv
dotenv.config();

//DB CONNECTION
connectDB();

//rest object
const app = express();

//middlewares
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

//routes
app.use('/api/v1/user', require('./routes/userRoute'));
app.use('/api/v1/todo', require('./routes/todoRoute'));
app.use('/api/v1/test', require('./routes/testRoute'));

//port
const PORT = process.env.PORT || 8000;

//listen
app.listen(PORT, () => {
    console.log(`Server is running successfully in ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan.black);
});