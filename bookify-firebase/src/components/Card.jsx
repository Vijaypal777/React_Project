import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useFirebase } from "../context/firebase";
import { useNavigate } from "react-router-dom";

function BookCard(props) {
  const firebase = useFirebase();
  const navigate = useNavigate();
  const [url, setUrl] = useState(null);
  useEffect(() => {
    firebase.getImageURl(props.imageURl).then((url) => setUrl(url));
  }, []);
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={url} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          This book has a title {props.name} and this book cost Rs{props.price}
        </Card.Text>
        <Button
          onClick={(e) => navigate(props.link)}
          variant="primary"
        >
          View
        </Button>
      </Card.Body>
    </Card>
  );
}

export default BookCard;
