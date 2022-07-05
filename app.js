const express = require("express");
const app = express();
const fs = require("fs");

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.get("/video", function (req, res) {
  const range = req.headers.range;
  if (!range) {
      res.status(400).send("Requires Range header");
  }
  const videoPath = "Backend Web Development Explained.mp4";
  const videoSize = fs.statSync("Backend Web Development Explained.mp4").size;
  const CHUNK_SIZE = 10 ** 6; // 1MB
  const start = Number(range.replace(/\D/g, ""));
  const end = Math.min(start + CHUNK_SIZE, videoSize - 1);
});
 

app.listen(3000, function () {
    console.log("Server started listening on port 3000!");
});