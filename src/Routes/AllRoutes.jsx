import React from "react";
import { Route, Routes } from "react-router-dom";
import ContactList from "../Components/ContactList";
import Login from "../Components/Login";
function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<ContactList />} />
      </Routes>
    </>
  );
}

export default AllRoutes;
