var mysql = require("mysql");

var connection = mysql.createConnection({
	port:3306,
	host:"d6ybckq58s9ru745.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
	user: "igzrusnxw78kr7id",
	password: "pzm6kqsbz08kd8li",
	database:"v5bk5n965nxx1rfp"
});

connection.connect(function(err){
	if(err){
		console.log("error connecting:" + err.stack);
		return;
	}
	console.log("connected as id" + connection.threadId);
});

module.exports = connection;