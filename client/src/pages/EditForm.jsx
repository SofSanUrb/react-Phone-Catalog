import { React, useState, useEffect } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import config from "../config";
import axios from "axios";

export default function EditForm(props) {
  const [phone, setPhone] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`${config.API_URL}/api/phones/${props.match.params.phoneId}`)
      .then((response) => setPhone(response.data))
      .catch(() => console.log("Fetching failed"));
  }, [props.match.params.phoneId]);

  const handleChangeForm = (event) =>
    setPhone({
      ...phone,
      [event.currentTarget.name]: event.currentTarget.value,
    });

  const handleEditPhone = (event) => {
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
      .patch(`${config.API_URL}/api/edit/${props.match.params.phoneId}`, uploadForm)
      .then((response) => {
        props.history.push("/");
      })
      .catch((err) => setError(err.response.data));
  };

  return (
    <Form className="card-column" onSubmit={handleEditPhone}>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control
          name="name"
          type="text"
          value={phone.name}
          onChange={handleChangeForm}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Manufacturer</Form.Label>
        <Form.Control
          name="manufacturer"
          type="text"
          value={phone.manufacturer}
          onChange={handleChangeForm}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control
          name="description"
          value={phone.description}
          onChange={handleChangeForm}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>color</Form.Label>
        <Form.Control
          name="color"
          type="text"
          value={phone.color}
          onChange={handleChangeForm}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Price (€)</Form.Label>
        <Form.Control
          name="price"
          type="number"
          value={phone.price}
          onChange={handleChangeForm}
        />
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
        <Form.Control
          name="screen"
          type="text"
          value={phone.screen}
          onChange={handleChangeForm}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Processor</Form.Label>
        <Form.Control
          name="processor"
          type="text"
          value={phone.processor}
          onChange={handleChangeForm}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Ram</Form.Label>
        <Form.Control
          name="ram"
          type="number"
          value={phone.ram}
          onChange={handleChangeForm}
        />
      </Form.Group>
      {error ? <Alert variant="warning" className="errorMessage">{error.errorMessage}</Alert> : null}
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
