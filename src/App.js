import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AllClients from "./pages/clients/AllClients";
import NewSignUps from "./pages/clients/NewSignUps";
import VerifiedClients from "./pages/clients/VerifiedClients";
import Unverified from "./pages/clients/Unverified";
import Inactive from "./pages/clients/Inactive";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/allClients" element={<AllClients />} />
        <Route path="/newSignUps" element={<NewSignUps />} />
        <Route path="/verifiedClients" element={<VerifiedClients />} />
        <Route path="/unverified" element={<Unverified />} />
        <Route path="/inactive" element={<Inactive />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
