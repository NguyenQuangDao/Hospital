import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppHeader from "./Components/Header/AppHeader";
import Acounting from "../Modules/Accounting/Acounting/Acounting";
import Reception from "../Modules/Reception/Reception";
import Xray from "../Modules/X-Ray/Xray";
import Home from "../Modules/Home/Home";
function App() {
  return (
    <Router>
      <div className="App">
        <AppHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Acounting" element={<Acounting />} />
          <Route path="/Reception" element={<Reception />} />
          <Route path="/Xray" element={<Xray/>}/>
        </Routes>
      </div>
    </Router>
  );
}
export default App;
