const path = require('path');

const router = require('express').Router();

// send notes first to notes file then to html page.
router.get('/notes', (req,res) =>{

res.sendFile(path.join(__dirname, '../public/notes.html'))

})

router.get('*', (req, res) => {

    res.sendFile(path.join(__dirname, '../public/index.html'))

})