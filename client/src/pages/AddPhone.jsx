import React from "react";
import { Form, Button } from "react-bootstrap";

export default function AddPhone(props) {
  const { onAdd, error } = props;
  
  return (
    <Form onSubmit={onAdd}>
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
      {error ? (
        <p className="errorMessage">{error.errorMessage}</p>
      ) : null}
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
