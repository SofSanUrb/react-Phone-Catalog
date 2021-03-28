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
    <h1>Phone Catalog</h1>
      {phones.length && phones.map(phone => {
        return (<h2 key={phone._id}>{phone.name}</h2>)})}
    </div>
  );
}

export default HomePage;
