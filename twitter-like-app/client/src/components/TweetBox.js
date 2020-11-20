import React, { useState } from "react";
import { Form, FormInput, Button, FormTextarea } from "shards-react";
import "./TweetBox.css";

function TweetBox(props) {
  const { socket } = props;
  const [yourTweetName, setYourTweetName] = useState("");
  const [yourTweet, setYourTweet] = useState("");

  const submitTweet = (e) => {
    // not having preventdefault will refresh the page and clear out the fields
    e.preventDefault();

    socket.emit("tweetEvent", {
      name: yourTweetName,
      tweet: yourTweet,
    });
  };

  return (
    <div className="tweet-box">
      <Form onSubmit={submitTweet} className="tweet-box-form">
        {/* "FormInput is from shards-react imported above" */}
        <FormInput
          size="sm"
          placeholder="Name"
          name="name"
          required
          onChange={(e) => {
            setYourTweetName(e.target.value);
          }}
        ></FormInput>

        <FormTextarea
          size="sm"
          rows="4"
          placeholder="Message"
          name="tweet"
          required
          onChange={(e) => {
            setYourTweet(e.target.value);
          }}
        ></FormTextarea>

        <Button pill size="sm" type="submit" className="tweet-btn">
          <b>TWEET</b>
        </Button>
      </Form>
    </div>
  );
}

export default TweetBox;
