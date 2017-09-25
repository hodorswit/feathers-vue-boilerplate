/* eslint-disable no-console */

// property-model.js - A KnexJS
//
// See http://knexjs.org/
// for more of what you can do here.
module.exports = function(app) {
  const db = app.get("knexClient");

  db.schema.hasTable("property").then(exists => {
    if (!exists) {
      db.schema
        .createTable("property", table => {
          table.increments("id");
          table.string("address1");
          table.string("address2");
          table.string("city");
          table.string("state");
          table.string("zip");
          table.timestamps();
        })
        .then(
          () => console.log("Updated property table"),
          e => console.error("Error updating property table", e)
        );
    }
  });

  return db;
};
