//load data 
//linking route to data sources

// const notesData = require('../db/db.json');
var notesData = require('../db/db.json')
const fs = require('fs');
var uniqId = require('uniqid');


//routing
module.exports = (app) => {


    //api get request
    //when user visit localhost:8080/api/notes... page will display JSON DATA
    app.get('/api/notes', (req, res) => res.json(JSON.parse(fs.readFileSync("./db/db.json"))));


    //api post request
    //when user enter title and text for notes it will push to server and save to notes data as json object
    app.post('api/notes', (req, res) => {
        // let savedNotes = JSON.parse(fs.readFileSync(notesData));
        let newNote = req.body;
        // // let uniqueId = (savedNotes.length).toString();
        newNote.id = uniqId();
        notesData.push(newNote);

        fs.writeFileSync("./db/db.json", JSON.stringify(notesData), "utf8", (err, data) => {
            if (err) throw err;
        });

        res.json(true);
    });

    //api delete notes
    app.delete("/api/notes/:id", function (req, res) {
        let id = req.params.id;
        notesData.splice(notesData.indexOf(id), 1);

        fs.writeFileSync("./db/db.json", JSON.stringify(notesData), "utf8", (err, data) => {
            if (err) throw err;
        });
        res.json(true);
    });
};