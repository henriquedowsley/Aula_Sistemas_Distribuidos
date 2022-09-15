const mysql = require("mysql");
const fs = require("fs");
const { connect } = require("http2");
let any;

class HandleDBMySQL {
  constructor() {
    any = JSON.parse(
      fs.readFileSync("./config/server/config.json", "utf8", "r")
    );
  }

  connect() {
    return mysql.createConnection({
      host: any.host,
      port: any.port,
      user: any.user,
      password: any.password,
      database: any.database,
    });
  }
}

const mysqlConnection = new HandleDBMySQL().connect();
mysqlConnection.connect();

module.exports = HandleDBMySQL;
