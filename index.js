const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
const knexConfig = require("./knexfile");
const knex = require("knex")(knexConfig.development);

const routerAPI = express.Router();

app.use("/api", routerAPI);

// CRUD

routerAPI.get("/readuser", function (req, res) {
  knex
    .select("*")
    .from("produtos")
    .then((produtos) => {
      res.json(produtos);
      res.send(produtos);
    });
});

routerAPI.post("/createuser", function (req, res) {
  const novoProduto = {
    descricao: req.body.descricao,
    valor: req.body.valor,
    marca: req.body.marca,
  };

  knex("produtos")
    .insert(novoProduto, ["id"])
    .then((data) => {
      let id = data[0].id;
      novoProduto.id = id;
      res.status(201).json(novoProduto);
    });

  // res.send(novoProduto);
});

// routerAPI.get("/deleteuser", function (req, res) {
//   const searchUser = req.query.name;

//   const index = 0;

//   users.map((user) => {
//     if (user.name == searchUser) {
//       users.splice(1, index);
//     }

//     index++;
//   });

//   res.send(newUser);
// });

// routerAPI.use(function (req, res) {
//   const url = req.host + req.url;

//   res.status(418).send(":( <br>" + url + "<br> Not Found!");
// });

//

const PORT = 3000;

app.listen(PORT, function () {
  console.log("Running on: http://localhost:" + PORT);
});
