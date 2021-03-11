//load data 
//linking route to data sources

// const notesData = require('../db/db.json');
const notesData = require('../db/db.json')
const fs = require('fs');
const path = require('path');

//routing
module.exports = (app) => {


    //api get request
    //when user visit localhost:8080/api/notes... page will display JSON DATA
    app.get('/api/notes', (req, res) => res.json(notesData));


    //api post request
    //when user enter title and text for notes it will push to server and save to notes data as json object
    app.post('api/notes', (req, res) => {
        // let savedNotes = JSON.parse(fs.readFileSync(notesData));
        let newNote = req.body;
        // // let uniqueId = (savedNotes.length).toString();

        savedNotes.push(newNote);

        fs.writeFileSync("./db/db.json", JSON.stringify(notesData), "utf8", (err, data) => {
            if (err) throw err;
        });

        res.json(true);
    });

};