import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";

import config from "../config";
import axios from "axios";

function HomePage() {
  const [phones, setPhones] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${config.API_URL}/api/phones`, {withCredentials:true})
      .then((response) => {
        setPhones(response.data);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      })
      .catch(() => console.log("Fetching failed"));
  }, []);

  return (
    <div className="App">
      <h1>Phone Catalog</h1>

      {isLoading ? (
        <div className="spinner-column">
          <Spinner className="my-spinner" animation="grow" />
        </div>
      ) : (
        <section id="phone-catalog">
          {phones.map((phone) => {
            return (
                <div className="phone-card" key={phone._id}>
                  <img
                    className="phone-index-picture"
                    src={phone.imageFileName}
                    alt="phone-front"
                  />
                  <h2 key={phone._id}>{phone.name}</h2>
                  <Link to={`/phones/${phone._id}`}>More Info</Link>
                </div>
            
            );
          })}
        </section>
      )}
    </div>
  );
}

export default HomePage;
