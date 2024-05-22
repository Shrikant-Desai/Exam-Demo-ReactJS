import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light p-4"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/home">
          <img
            width="24"
            height="24"
            src="https://img.icons8.com/plumpy/24/tag.png"
            alt="tag"
          />
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
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link active  " : "nav-link"
              }
              to="/"
            >
              Simple Form
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link active  " : "nav-link"
              }
              to="/AdvanceUserDetailsForm"
            >
              Complex Form
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
