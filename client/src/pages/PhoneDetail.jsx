import { React, useState, useEffect } from "react";
import config from "../config";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";

export default function PhoneDetail(props) {
  const [phone, setPhone] = useState({});
  useEffect(() => {
    console.log(props)
    axios
      .get(`${config.API_URL}/api/phones/${props.match.params.phoneId}`)
      .then((response) => setPhone(response.data))
      .catch(() => console.log("Fetching failed"));
  },[]);

  return (
    <>
      {Object.keys(phone) ? (
        <div className="phone-detail">
          <img
            className="phone-index-picture"
            src={phone.imageFileName}
            alt="phone-front"
          />
          <h2>{phone.name}</h2>
        </div>
      ) : (
        <Spinner animation="grow" />
      )}
    </>
  );
}
