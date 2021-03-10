//dependencies
const express = require('express');


//tells node we creating an express server
const app = express();

//sets initial port if use host port if upload to heroku or use localhost8080
var PORT = process.env.PORT || 8080;

//set up express to handle data parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//routing for api and html
// require('./routing/api-routes')(app);
require('./routing/html-routes')(app);


//listener
app.listen(PORT, ()=> {
    console.log(`App listening on PORT: ${PORT}`);
});