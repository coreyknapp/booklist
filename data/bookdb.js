/*
* Handles all editing of the model
*/

const auth = require('./auth');
//A Pool is the easiest way to establish a connection
const Pool = require('pg').Pool;
const pool = new Pool({
    user: auth.user,
    host: auth.host,
    database: auth.database,
    password: auth.password
});

module.exports = {
    //Fetch all books in the database and sort them by id
  getAllBooks: function(callback){
      pool.query('SELECT * FROM books ORDER BY id ASC', function (error, results) {
          if(error){
              throw error;
          }
          callback(results.rows);
      });
  },
    //Fetch a single book with the given id from the database
    getBookWithID: function(id, callback){
      pool.query('SELECT * FROM books WHERE id=$1', [id], function(error, results){
          if(error){
              throw error;
          }
          callback(results.rows);
        });
    },
    //Add a book to the database
    addBook: function(book, callback){
        pool.query('INSERT INTO books (id, title, isbn, author, pages, finished) values(default, $1, $2, $3, $4, $5)',
            [book.title, book.isbn, book.author, book.pages, book.finished],
            function (error, results) {
                if(error){
                    throw error;
                }

                callback(results.rows);
            });
    },

    //Delete the book with the given id from the database
    deleteBook: function(id, callback){
        pool.query('DELETE FROM books WHERE id=$1', [id], function(error, results) {
            if(error){
                throw error;
            }
            callback(results);
        });
    },

    //Update the info of an existing book
    updateBook: function(book, callback){
        //Find the given book in the database using its id (which shouldn't change), and then simply reassign
        //all of its values
        pool.query('UPDATE books SET title = $1, author = $2, isbn = $3, pages = $4, finished = $5 WHERE id = $6',
            [book.title, book.author, book.isbn, book.pages, book.finished, book.id],
            function (error, results){
                if(error){
                    throw error;
                }
                callback(results);
            });
    }
};