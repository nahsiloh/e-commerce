import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import ShopPage from "./pages/ShopPage/ShopPage";
import LoginAndSignUpPage from "./pages/LoginAndSignUpPage/LoginAndSignUpPage";

function App() {
  return (
    <div className="body">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={LoginAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
