const express = require("express");
const mysql = require("mysql");
const PORT = process.env.PORT || 3000;
const app = express();
const endPointRoot = "/DBLink/API/v1"

const connection = mysql.createConnection({
    host: "sunsetonthewater.ca",
    user: "sunseton_ProjectApp",
    password: "cDlc2zFnLHDe",
    database: "sunseton_351Project",
    port: 3306
});


app.use(function(rq,res,next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
});

app.put(endPointRoot + "/edit/:id&:QuestNew", (req,res) => {
    let Q = req.params.QuestNew;
    let I = req.params.id;
    let message = "UPDATE QuizQuestions SET Question='" + Q + "' WHERE Id='" + I + "'";
    connection.query(message,(err, result) => {
        if (err){
            console.log("Error with Update" + message); 
            throw err;
    };
        res.send("Updated!");
    })
});


app.post(endPointRoot + "/input/:Quest", (req,res) => {
    connection.query('INSERT INTO QuizQuestions (Question) VALUES (?)',[req.params.Quest],
    (err, result) => {
        if (err) {
            console.log("Error with insert");
            throw err;
        };
        res.send("Added Quote");
    })
});

app.delete(endPointRoot + "/select/:id", (req,res) => {
    connection.query("DELETE FROM QuizQuestions WHERE Id=?",[req.params.id], (err, result) => {
        if (err) throw err;
        res.send("Deleted!");
    })
});

app.get(endPointRoot + "/select/1", (req,res) => {
    connection.query("SELECT * FROM QuizQuestions ORDER BY id DESC LIMIT 1", (err,result) => {
        if (err) throw err;
        res.send(result);
    })
});

app.get(endPointRoot + "/select", (req,res) => {
    console.log("Getting");
    connection.query("SELECT * FROM QuizQuestions", (err,result) => {
        if (err) throw err;
        res.send(result);
    })
});

app.listen(PORT, (err) => {
    if (err) throw err;
    console.log("listening to port, ", PORT);
});
