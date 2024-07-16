import React from "react";
import { Link } from "react-router-dom";
import "./styles/Home.css";

const Home = () => {
  return (
    <div className="Home-Div">
      <div className="Home-VMText">
        <p className="Home-VMText-p">
          HELLO I AM A VENDING MACHINE. WHAT WOULD YOU LIKE TO EAT?
        </p>
      </div>
      <div className="Home-LinkDiv">
        <Link to="/Soda" className="Home-Link">
          Soda
        </Link>
        <Link to="/Chips" className="Home-Link">
          Chips
        </Link>
        <Link to="/Chocolate" className="Home-Link">
          Chocolate
        </Link>
      </div>
    </div>
  );
};

export default Home;
