import React from "react";
import io from "socket.io-client";
import TweetBox from "../components/TweetBox";
import Feed from "../components/Feed";
import "./styles.css";

// change this when hosting
// could make the static server take this as a node env variable
// iniate connection here and pass it down as props
const socket = io.connect("http://localhost:5000");

function HomePage() {
  return (
    <div className="home-page">
      <h1>twitter-like feed</h1>
      <TweetBox socket={socket} />
      <Feed socket={socket} />
    </div>
  );
}

export default HomePage;
