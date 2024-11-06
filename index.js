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
app.get("/api/genre", (req, res) => {
    res.json(genre);
});
app.get("/api/poem", (req, res) => {
    res.json(poem);
});


app.get("/api/poets/:id", (req,res) => {
    const poets_id = poets.find((p) => p.id == req.params.id);
    if (post) res.json(post);
});
app.get("/api/genre/:genre_name", (req,res) => {
    const requested_genre = genre.find((g) => g.genre_name == req.params.genre_name);
    if (requested_genre) {
        const poems_by_genre = poem.filter((p) => p.genre == requested_genre.genre_name)
        if (poems_by_genre.length > 0) {
            res.json(poems_by_genre)}
            else{
                res.status(404).json({error: "There are no poems in this genre"})}}
            
    else {
            res.status(404).json({error: "Genre not found"});
        }});
app.get("/api/poem/:id", (req,res) => {
    const poem_id = poem.find((p) => p.id == req.params.id);
    if (genre) res.json(genre);
});


app.use((req, res) => {
    res.status(404);
    res.json({ error: "No results found" });
  });
  
