import React from "react";
import { ListGroup, ListGroupItem } from "shards-react";

// dumb component
function Tweets(props) {
  const { name, tweet } = props;

  return (
    <ListGroup>
      {/* can have styles like this too */}
      {/* css variables! */}
      <ListGroupItem style={{ background: "var(--light)" }}>
        {name}
      </ListGroupItem>
      <ListGroupItem>{tweet}</ListGroupItem>
    </ListGroup>
  );
}

export default Tweets;
