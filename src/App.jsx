import React from "react";
import Header from "./components/Header";
import { ComponentContainer } from "./store/store";
import Alert from "./components/Alert";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <ComponentContainer>
        <Header title="TextUtils" about="About us" home="Home" />
        <div style={{ height: "60px" }} >
        <Alert />
        </div>
        <div className="container ">
          <TextForm/>
        </div>
      </ComponentContainer>
    </>
  );
}

export default App;
