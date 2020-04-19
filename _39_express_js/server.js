const express = require("express");

const { accessControl } = require("./middleware");

const users = [
    { id: 1, name: "Coskun", place: "Ankara" },
    { id: 2, name: "Engin", place: "Ankara" }
]

const app = express();

const PORT = 5000;


// eğer bu şekilde verilirse bütün requestler
// accesscontol'e düşer
// eğer sadece bir metoda özgü olsun istenirse
// aşağıdaki gibi bir tanım yapılmalı
// app.get("/users", accessControl, (req, res, next) => {
//
//     res.json(users);
//
// });
app.use(accessControl);


// http request body'ye erişebilmek için kullanılır.
app.use(express.json());

// Get Request
app.get("/users", (req, res, next) => {

    res.json({
        success: true,
        data: users
    });

});

// Post Request
app.post("/users", (req, res, next) => {

    users.push(req.body);

    res.json({
        success: true,
        data: users
    });

});

app.listen(PORT, () => {
    console.log("Server started on " + PORT);
});