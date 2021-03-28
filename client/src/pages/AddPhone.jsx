import {React, useState} from "react";
import { Form, Button, Alert } from "react-bootstrap";
import config from "../config";
import axios from "axios";

export default function AddPhone(props) {
  const [error, setError] = useState(null);

  const handleAddPhone = (event) => {
    event.preventDefault();

    let uploadForm = new FormData();
    uploadForm.append("imageUrl", event.target.imageUrl.files[0]);
    uploadForm.append("name", event.target.name.value);
    uploadForm.append("manufacturer", event.target.manufacturer.value);
    uploadForm.append("description", event.target.description.value);
    uploadForm.append("color", event.target.color.value);
    uploadForm.append("price", event.target.price.value);
    uploadForm.append("screen", event.target.screen.value);
    uploadForm.append("processor", event.target.processor.value);
    uploadForm.append("ram", event.target.ram.value);

    axios
      .post(`${config.API_URL}/api/add-phone`, uploadForm, {
        withCredentials: true,
      })
      .then((response) => {
        props.history.push("/");
      })
      .catch((err) => setError(err.response.data));
  };
  
  return (
    <Form onSubmit={handleAddPhone}>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control name="name" type="text" placeholder="Iphone xx" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Manufacturer</Form.Label>
        <Form.Control name="manufacturer" type="text" placeholder="Apple" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control name="description" type="text" />
      </Form.Group>
      <Form.Group>
        <Form.Label>color</Form.Label>
        <Form.Control name="color" type="text" placeholder="black" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Price (€)</Form.Label>
        <Form.Control name="price" type="number" placeholder="600" />
      </Form.Group>
      <Form.Group>
        <Form.File
          name="imageUrl"
          label="Phone image"
          accept="image/png, image/jpg"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Screen</Form.Label>
        <Form.Control name="screen" type="text" placeholder="4,7 inch IPS" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Processor</Form.Label>
        <Form.Control name="processor" type="text" placeholder="A10 Fusion" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Ram</Form.Label>
        <Form.Control name="ram" type="number" placeholder="2" />
      </Form.Group>
      {error ? <Alert variant="warning" className="errorMessage">{error.errorMessage}</Alert> : null}
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
