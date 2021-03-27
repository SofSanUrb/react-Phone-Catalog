import { React, useState, useEffect } from "react";
import config from '../config'
import axios from 'axios'
import "../App.css";

function HomePage() {
  const [phones, setPhones] = useState([])

  useEffect(() => {
    axios.get(`${config.API_URL}/api/phones`)
      .then((response) => setPhones(response.data))
      .catch(() => console.log('Fetching failed'))
  },[])

  return (
    <div className="App">
      {phones.length ? <h2>{phones.name}</h2> : <h2>No phones...yet</h2>}
    </div>
  );
}

export default HomePage;
