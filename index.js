const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log(new Date().toString(), req.hostname, req.method, req.url);
  next();
});

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/enzo", (req, res) => {
  res.send("Enzo");
});

app.get("/hello", (req, res) => {
  const name = req.query.name;
  res.send(`Hello ${name}`);
});

app.get("/reg", (req, res) => {
    res.send(`
        
        <form>
            <input name="name"></input>
            <button type="send">Send</button>
        </form>
        
    `);
});

app.post('/reg', (req, res) => {
    res.send('Name: ' + req)
})

const PORT = 3000;

app.listen(PORT, function () {
  console.log("Running on: http://localhost:" + PORT);
});
