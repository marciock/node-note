const express = require('express');
const router = express.Router();
const note=require('../controllers/note-controller')


/* GET home page. */


router.get('/',note.listAny)

module.exports = router;
