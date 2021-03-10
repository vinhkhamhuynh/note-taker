//dependencies

const path = require('path');

//routing export

module.exports = (app) => {
    //html get requests 
    //building route so when user click on button take user to set page 
    
    // take user to notes.html with localhost:8080/notes
    app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'))
    });

    // take user to homepage with localhost8080/
    app.get('*', (req, res) => {
        res.sendFile (path.join(__dirname, '../public/index.html'))
    });


};