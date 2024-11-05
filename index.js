const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });

  app.get("/", (req, res) => {
    res.send("Hello Express")
  })
const genre = require("./data/genre")
const poem = require("./data/poem")
const poets = require("./data/poets")

app.get("/api/poets", (req, res) => {
    res.json(posts);
});

app.get("api/poets/:id", (req,res) => {
    const poets = poets.find((p) => p.id == req.params.id);
    if (post) res.json(post);
});

app.get("/api/genre", (req, res) => {
    res.json(posts);
});

app.get("api/genre/:id", (req,res) => {
    const poets = poets.find((p) => p.id == req.params.id);
    if (post) res.json(post);
});

app.get("/api/poem", (req, res) => {
    res.json(posts);
});

app.get("api/poem/:id", (req,res) => {
    const poets = poets.find((p) => p.id == req.params.id);
    if (post) res.json(post);
});


app.use((req, res) => {
    res.status(404);
    res.json({ error: "No results found" });
  });
  
  app.listen(port, () => {
    console.log(`Server listening on port: ${port}.`);
  });