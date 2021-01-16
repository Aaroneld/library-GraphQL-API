# library-GraphQL-API

## Problem Domain

A national coalition of libraries require a web application which can be accessed by members and employees
alike in order to utilize information about books/authors currently in their system as well as to update loaned
statuses on books and reconcile further loans according to that information.

There will be 3 types of user: ADMIN, librarian, member

_admins_ -- can read and right all information specifically they are the only user type who
can remove author, publisher, library, and librarian resources and are the only ones who can add library, and librarian resources.

_Librarians_ -- have access to functions which allow them to add/update book resources,
loan out books to members, update book information on book returns, and to add and remove
member resources in relation to the library they work at

_Members_ -- have access to read information about books, authors, awards, libraries, can make a request to loan a book, and can return a book already loaned.

Fidelity must be ensured such that users are constrained within the prescribed boundaries of their user type.

The application must be graphical in nature and robust options should be available when querying book/author records.

#### Book Requests

A member should be able to see if a book is available for loan. A librarian should be able to see which books are requested for loan from their library and to grant those requests on a first come first serve basis as long as the book is already available. Users who requests cannot be granted should be put in a queue in order according to the time of their request (FIFO)
