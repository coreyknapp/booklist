/*
* Business logic that converts requests from the view into changes to the model and then responds with a new view
*/
var bookdata = require("../data/bookdb");

module.exports = {
    //Home page
    home: function(req, res){
        res.render("home");
    },
    //View the list of books
    getAllBooks: function(req, res){
        bookdata.getAllBooks(function(result){
            res.render("viewBooks", {bookList: result});
        });
    },

    //View for user to enter information about a new book
    addBook: function(req, res){
        res.render("addBook");
    },

    //Add the book to the database, then redirect to viewBooks
    addBookToDB: function(req, res){
        bookdata.addBook(req.body, function(){
            res.redirect("/viewBooks");
        })
    },

    //Delete the book from the database, then redirect to viewBooks
    deleteBook: function(req, res){
        bookdata.deleteBook(req.query.id, function(){
           res.redirect("/viewBooks");
        });
    },

    //View to edit a book that already exists in the DB
    editBook: function(req, res){
        //The book id is contained in the URL params, so fetch the book with that ID
        bookdata.getBookWithID(req.query.id, function(result){
            //Make sure we found something first
            if(result.length == 0){
                console.log("Book id " + req.query.id + " not found");
                res.redirect("/viewBooks");
                return;
            }
            //Afterwards, render editBook with the found book
            res.render("editBook", {book: result[0]});
        });
    },

    //Update the info of a book already in the database.
    updateBookInDB: function(req, res){
        bookdata.updateBook(req.body, function() {
            res.redirect("/viewBooks");
        })
    }
};