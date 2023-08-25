import { Container } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/Home/home";
import Auth from "./components/Auth/auth";
import Navbar from "./components/Navbar/navbar";
import CountryDetails from "./components/countryDetails/CountryDetails";


const App = () => {

  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <div>
        <Navbar />
          <Routes>
            <Route path="/" exact Component={() => <Navigate to="/countries" />} />
            <Route path="/countries" exact element={<Home />} />
            <Route
              path="/auth"
              exact
              element={<Auth/>}
            />
            <Route path="/country/:id" exact element={<CountryDetails />} />
          </Routes>
        </div>
      </Container>
    </BrowserRouter>
  );
};

export default App;
