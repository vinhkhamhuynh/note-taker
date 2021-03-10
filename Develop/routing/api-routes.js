//load data 
//linking route to data sources

const notesData = require('../data/notesData');

//routing
module.exports = (app) => {
//api get request
//when user visit localhost:8080/api/notes... page will display JSON DATA
app.get('/api/notes', (req, res)=> res.json(notesData));
};