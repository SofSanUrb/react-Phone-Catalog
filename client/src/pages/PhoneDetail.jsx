import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Spinner, Button } from "react-bootstrap";

import config from "../config";
import axios from "axios";

export default function PhoneDetail(props) {
  const [phone, setPhone] = useState({});
  useEffect(() => {
    axios
      .get(`${config.API_URL}/api/phones/${props.match.params.phoneId}`, {withCredentials:true})
      .then((response) => setPhone(response.data))
      .catch(() => console.log("Fetching failed"));
  }, [props.match.params.phoneId]);

  const handleDeletePhone = (id) => {
    axios.delete(`${config.API_URL}/api/delete/${id}`, {withCredentials:true})
    .then(() => {
      props.history.push('/')
  })
  .catch(err => console.log(err))
  }

  return (
    <>
    <Helmet>
      <title>Phone - Details</title>
    </Helmet>
    <div className="card-column">
      {Object.keys(phone) ? (
        <div className="phone-detail">
          <img
            className="phone-index-picture"
            src={phone.imageFileName}
            alt="phone-front"
          />
          <div className="detail-info">
            <h3>{phone.name}</h3>

            <div className="phone-details-row">
              <p>Manufacturer: {phone.manufacturer}</p>
              <p>Color: {phone.color}</p>
            </div>

            <p className="text-left text-italic">"{phone.description}"</p>

            <div className="phone-details-row">
              <p>{phone.screen} Screen</p>
              <p>{phone.processor} Processor</p>
              <p>RAM: {phone.ram}GB</p>
            </div>
            <h4>Price: {phone.price} €</h4>
          </div>
          <div className="phone-details-row detail-buttons">
            <Link to={`/edit/${phone._id}`}>
              <Button variant="primary">Edit</Button>
            </Link>
            <Button variant="light" onClick={() => handleDeletePhone(phone._id)}>Delete</Button>
          </div>
        </div>
      ) : (
        <Spinner animation="grow" />
      )}
    </div>
    </>
  );
}
