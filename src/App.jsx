import React from "react";
import Header from "./components/Header";
import { ComponentContainer } from "./store/store";
import Alert from "./components/Alert";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <ComponentContainer>
        <Header title="TextUtils" about="About us" home="Home" />
        <div style={{ height: "60px" }}>
          <Alert />
        </div>
        <div className="container ">
          <Outlet />
        </div>
        <Footer />
      </ComponentContainer>
    </>
  );
}

export default App;
