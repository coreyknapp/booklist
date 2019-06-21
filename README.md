# Booklist

Short project to demonstrate CRUD operations in Node.js using an MVC pattern.

# Stack
## Jade
Jade is a templating engine that I used for creating the front-end. It's far from the ideal choice, but I picked it because of its simple syntax and because of the need to turn this around quickly.

## Node.js and Express
These two were picked because of how familiar I am with the frameworks.

## Node-Postgres
I most recently used node-postgres in a personal project, so it was fresher in my mind than other packages.

# Changes to be made
This was only done in a couple hours, so this is missing some little features:
* Nothing is done to check whether all of the fields in addBook/editBook have valid content
* POST requests are very basic and do not perform any kind of authentication
* There is no error handling, it just crashes when a problem occurs

# Database schema
The database is simple. It contains a single table called books with the following columns:

* id (serial [postgres' form of auto increment], primary key)
* title (text)
* author (text)
* isbn (text)
* pages (integer)
* finished (boolean)
