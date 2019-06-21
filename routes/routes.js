/*
* Routes to direct get and post requests
*/
var express = require('express');
var router = express.Router();
var controller = require('../controllers/controller');

router.get('/', controller.home);
router.get('/viewBooks', controller.getAllBooks);
router.get('/addBook', controller.addBook);
router.get('/delete', controller.deleteBook);
router.get('/editBook', controller.editBook);

router.post('/create', controller.addBookToDB);
router.post('/update', controller.updateBookInDB);

module.exports = router;