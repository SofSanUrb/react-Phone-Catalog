import { React, useState, useEffect } from "react";
import config from "../config";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import { Link } from "react-router-dom";

function HomePage() {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    axios
      .get(`${config.API_URL}/api/phones`)
      .then((response) => setPhones(response.data))
      .catch(() => console.log("Fetching failed"));
  }, []);

  return (
    <div className="App">
      <h1>Phone Catalog</h1>
      <section id="phone-catalog">
        {phones.length ? (
          phones.map((phone) => {
            return (
              <Link to={`/phones/${phone._id}`}>
                <div className="phone-card">
                  <img
                    className="phone-index-picture"
                    src={phone.imageFileName}
                    alt="phone-front"
                  />
                  <h2 key={phone._id}>{phone.name}</h2>
                </div>
              </Link>
            );
          })
        ) : (
          <Spinner animation="grow" />
        )}
      </section>
    </div>
  );
}

export default HomePage;
