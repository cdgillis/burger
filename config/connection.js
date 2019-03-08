var connection = mysql.createConnection({
    host: "localhost",
    // Your port; if not 3306
    port: 3306,
    // Your username
    user: "root",
    // Your password
    password: "hellojello",
    database: "burgers_db"
  });

connection.connect(function (err) {
    if (err)throw err;
    console.log("Connected to db");
})

  module.exports = connection;