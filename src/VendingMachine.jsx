import { Link, Route, Routes } from "react-router-dom";
import Chips from "./snacks/Chips";
import Soda from "./snacks/Soda";
import Chocolate from "./snacks/Chocolate";
import Home from "./Home";

const VendingMachine = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Soda" element={<Soda />} />
        <Route path="/Chips" element={<Chips />} />
        <Route path="/Chocolate" element={<Chocolate />} />
      </Routes>
    </div>
  );
};

export default VendingMachine;
