const express = require("express");
const fs = require("fs");

const app = express();

app.get("/video", (req, res) => {
  const range = req.headers.range; // returns Bytes
  const videoPath = "./videoexample.mp4";
  const videSize = fs.statSync(videoPath).size;

  const chunkSize = 1 * 1e6;
  const start = Number(range.replace(/\D/g, ""));
  const end = Math.min(start + chunkSize, videSize - 1);

  const contenLength = end - start + 1;

  const headers = {
    "Content-Range": `bytes ${start}-${end}/${videSize}`,
    "Accept-Ranges": `bytes`,
    "Content-Length": contenLength,
    "Content-Type": "video/mp4",
  };

  res.writeHead(206, headers);

  const stream = fs.createReadStream(videoPath, { start, end });
  stream.pipe(res);
});

app.listen("3000");
