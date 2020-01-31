const mysql = require("mysql");
require("dotenv").config();


var db_config = {
  host: 'us-cdbr-iron-east-04.cleardb.net',
  user: 'b5b2fb599475ec',
  password: '53ac9b01',
  database: 'heroku_f53a33e5c1c71bb'
};
var connection;
// Sets up db to connect locally or on JAWSDB if deployed

// Turns BOOLEAN 0s and 1s returned from the db into true and false
connection.config.typeCast = function(field, next) {
  if (field.type == "TINY" && field.length == 1) {
    return field.string() == "1"; // 1 = true, 0 = false
  }
  return next();
};

// Export the connection so it's available in other parts of the app
module.exports = connection; 