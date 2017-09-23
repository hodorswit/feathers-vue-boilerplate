/* eslint-disable no-console */
const logger = require("winston");
const express = require("express");
const feathers = require("feathers");
const favicon = require("serve-favicon");
const path = require("path");
const feathersApi = require("./app");
const app = express();

// Mount the public folder
app.use(favicon(path.join(feathersApi.get("public"), "favicon.ico")));
app.use("/", feathers.static(feathersApi.get("public")));

// Mount feathesr api
app.use("/api", feathersApi);

const port = feathersApi.get("port");
const server = app.listen(port);

process.on("unhandledRejection", (reason, p) =>
  logger.error("Unhandled Rejection at: Promise ", p, reason)
);

server.on("listening", () =>
  logger.info(
    "Feathers application started on http://%s:%d",
    feathersApi.get("host"),
    port
  )
);
