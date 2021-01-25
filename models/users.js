const utilities = require("./utilities");

const findAllUsers = () => utilities.find("users");

const findUsersBy = (params) => utilities.findBy("users", params);

const getUsersBooks = (params) =>
    utilities
        .findBy("loanedAndRequestedBooks as lr", params)
        .select("requestStatus", "timeRequested", "bookId", "libraryId");

module.exports = { findAllUsers, findUsersBy, getUsersBooks };
