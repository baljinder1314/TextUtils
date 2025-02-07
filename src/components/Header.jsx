import { useContext } from "react";
import { stored } from "../store/store";
import { Link } from "react-router-dom";

function Header(props) {
  const { handleToggleMode,mode,modeText} = useContext(stored);
  let { title, about, home } = props;
  return (
    <nav className="navbar navbar-expand-lg sticky-sm-top " style={mode}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" style={mode} >
          {title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon invert" ></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to="/" style={mode}>
                {home}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" style={mode}>
                {about}
              </Link>
            </li>
          </ul>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={handleToggleMode}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              {modeText}
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
