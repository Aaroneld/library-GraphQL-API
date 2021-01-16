# library-GraphQL-API

## Problem Domain

A national coalition of libraries require a web application which can be accessed by members and employees 
alike in order to utilize information about books/authors currently in their system as well as to update loaned 
statuses on books and reconcile further loans according to that information.

There will be 3 types of user: ADMIN, librarian, member

ADMINS -- can read and right all information specifically they are the only user type who
can remove author, publisher, library, and librarian resources

Librarians -- have access to functions which allow them to add/update book resources,
loan out books to members, update book information on book returns, and to add and remove
member resources in relation to the library they work at

Members -- have access to read information about books, authors, awards, libraries, can make a request to loan a book, and can return a book already loaned.
