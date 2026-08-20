const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "portofolio_db",
  port: "3306"
});

db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Database berhasil terhubung");
  }
});

module.exports = db;