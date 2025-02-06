import React, { useContext, useState } from "react";
import { stored } from "../store/store";

function Footer() {
  const {mode} = useContext(stored)
  const [date, setDate] = useState(new Date())
  return (
    <div className="container" style={mode}>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <a
            href="/"
            className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
          >
            <svg className="bi" width="30" height="24">
              <use xllinkhref="#bootstrap"></use>
            </svg>
          </a>
          <span className="mb-3 mb-md-0 " style={mode}>
            © {date.getFullYear()} Made by Baljinder Singh
          </span>
        </div>

     
      </footer>
    </div>
  );
}

export default Footer;
