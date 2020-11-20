const express = require("express");
const httpModule = require("http");
const socketio = require("socket.io");

const app = express();
const http = httpModule.createServer(app);
const io = socketio(http, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

// not persistent, blank when server is restarted
let tweetsFromDB = [];

app.get("/", (req, res) => {
  res.send(
    "<h1>Serving a html page isn't required. This server is just for websockets</h1>"
  );
});

io.on("connection", (socket) => {
  // previous messages are sent to new clients on connection
  tweetsFromDB.map(({ name, tweet }) => {
    io.to(socket.id).emit("tweetEvent", {
      name,
      tweet,
    });
  });

  // listen to event
  socket.on("tweetEvent", ({ name, tweet }) => {
    console.log({ name, tweet });

    tweetsFromDB = [...tweetsFromDB, { name, tweet }];

    // on event, broadcast it back to all clients
    io.emit("tweetEvent", {
      name,
      tweet,
    });
  });
});

http.listen(5000, () => {
  console.log("listening on port 5000");
});
