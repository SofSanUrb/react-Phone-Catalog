import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddPhone from "./pages/AddPhone";
import { BrowserRouter } from "react-router-dom";
import MyNavBar from "./components/MyNavBar";
import MyFooter from "./components/MyFooter";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const handleAddPhone = () => {};

  return (
    <BrowserRouter>
      <div className="App">
        <MyNavBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route
            path="/addPhone"
            render={() => {
              return <AddPhone onAdd={handleAddPhone} />
            }}
          />
        </Switch>
        <MyFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;
