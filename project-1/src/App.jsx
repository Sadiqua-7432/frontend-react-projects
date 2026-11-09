import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Home";
import Details from "./components/Details";
import { Link } from "react-router-dom";
import Create from "./components/Create";
import Edit from "./components/Edit";

const App = () => {
  const { search, pathname } = useLocation();

  return (
    <div className="h-acreen w-screen flex ">
      {(pathname != "/" || search.length > 0) && (
        <Link
          to="/"
          className="text-red-600 z-999 absolute left-[21.5%] top-[6%]"
        >
          Home
        </Link>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Create" element={<Create />} />
        <Route path="/Details/:id" element={<Details />} />
        <Route path="/Edit/:id" element={<Edit />} />
      </Routes>
    </div>
  );
};

export default App;
