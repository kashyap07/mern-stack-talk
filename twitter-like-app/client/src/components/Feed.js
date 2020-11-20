import React, { useState, useEffect } from "react";
import Tweets from "./Tweets";
import "./Feed.css";

function Feed(props) {
  const { socket } = props;
  const [tweets, setTweets] = useState([]);

  // look up es6 spread and destructuring syntax
  // broadcasted tweets from server are populated in this component's state
  useEffect(() => {
    socket.on("tweetEvent", ({ name, tweet }) => {
      setTweets([...tweets, { name, tweet }]);
    });
  });

  const renderTweets = () => {
    return tweets.map(({ name, tweet }, index) => (
      <Tweets name={name} tweet={tweet} key={index} />
    ));
  };

  return (
    <div className="feed">
      <div>{renderTweets()}</div>
    </div>
  );
}

export default Feed;
