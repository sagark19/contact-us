// packages
const express = require('express');
const cors =  require('cors');
const app = express();

// DB connection
require('./config/dbConnection');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//contact-us routes imported
const contactUsRoute = require('./api/routes/routes');
app.use('/contact-us', contactUsRoute);

// variables
const PORT = process.env.PORT || 3001;  




app.listen(PORT,() => {
    console.log(`Server is listening on port ${PORT}`);
})