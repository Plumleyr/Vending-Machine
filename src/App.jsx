import { BrowserRouter, Route, Routes } from "react-router-dom";
import VendingMachine from "./VendingMachine";
import NavBar from "./NavBar";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="*" element={<VendingMachine />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
