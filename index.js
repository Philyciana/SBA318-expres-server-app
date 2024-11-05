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
    res.json(poets);
});

app.get("/api/poets/:id", (req,res) => {
    const poets_id = poets.find((p) => p.id == req.params.id);
    if (post) res.json(post);
});

app.get("/api/genre", (req, res) => {
    res.json(genre);
});

app.get("/api/genre/:id", (req,res) => {
    const genre_id = genre.find((p) => p.id == req.params.id);
    if (genre) res.json(genre);
});

app.get("/api/poem", (req, res) => {
    res.json(poem);
});

app.get("/api/poem/:id", (req,res) => {
    const poem_id = poem.find((p) => p.id == req.params.id);
    if (genre) res.json(genre);
});


app.use((req, res) => {
    res.status(404);
    res.json({ error: "No results found" });
  });
  
