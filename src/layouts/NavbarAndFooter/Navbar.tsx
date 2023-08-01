import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  return (
    <nav className="navbar navbar-expand-lg py-3 border border-bottom-dark" data-bs-theme="dark" style={{ backgroundColor: "#0e76a8" }}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Bibliort
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/*  */}
              <Link className={`nav-link ${location.pathname}==='/'?'active':''`} aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname}==='/search'?'active':''`} to="/search">
                SearchBooks
              </Link>
            </li>
          </ul>
          <div className="d-flex">
            <button className="btn  btn-outline-light border border-light " type="submit">
              Search
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
