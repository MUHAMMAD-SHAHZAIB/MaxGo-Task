// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";

import Table from "./Pages/Table";
import DetailPage from "./components/DetailPage";
import Card from "./Pages/Card";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [view, setView] = useState("table");

  const handleSwitchView = () => {
    setView((prevView) => (prevView === "table" ? "card" : "table"));
  };

  return (
    <>
    {/* ---switch buttton--- */}
      <div className="flex px-[100px] pt-[40px]">
        <button
          onClick={handleSwitchView}
          className={`px-4 py-2 text-white rounded ${
            view === "table" ? "bg-blue-500" : "bg-red-500"
          } transition-colors duration-300`}
        >
          {view === "table" ? "Switch To Card View" : "Switch To Table View"}
        </button>
      </div>
      <Router>
        <Routes>
          <Route path="/" element={view === "table" ? <Table /> : <Card />} />
          <Route path="/detail/:id" element={<DetailPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
