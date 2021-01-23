const express = require("express");
const graphLayer = require("./graphql");

const server = express();

server.use("/graphql", graphLayer);

module.exports = server;
