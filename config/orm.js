import connection from "./connection";

module.exports = {
    
    selectAll: function (table) {
        var query = "SELECT * FROM ??";
        connection.query(query, [table], function (err, res) {
            if (err) throw err;
            console.log(res);
        });
    },
    InsertOne: function (table, tableCol, ColValue) {
        var query = "INSERT INTO ?? (??, ??, ??) VALUES (??, ??, ??)";
        console.log(query);
        connection.query(query, [table, tableCol, ColValue], function (err, res) {
            if (err) throw err;
            console.log(res);
        });
    },
    updateOne: function (table, tableCol, newVal, ColValue) {
        var query = "UPDATE ?? SET ?? = ?? WHERE ?? = ??";
        connection.query(query, [table, tableCol, newVal, tableCol, ColValue], function (err, res) {
            if (err) throw err;
            console.log(res);
        });
    }
}