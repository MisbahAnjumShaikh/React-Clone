// import React from 'react'
import logo from "../assets/logo.png";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineTranslate } from "react-icons/md";
import { IoLogoGithub } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href={"https://react.dev/"}>
            <img src={logo} className="logo img-fluid" />
            <span>
            <a href={"https://react.dev/versions"} className="v19 fw-medium">v19</a></span>
          </a>

          <form className="d-flex" role="search">
            <div className="input-wrapper">
              <IoSearch className="search-icon" />
              <input
                className="search-field form-control me-2 rounded-pill"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <div className="shortcut-badge d-flex gap-1">
                <span className="ctrl px-2">Ctrl</span>
                <span className="K px-2">K</span>
              </div>
            </div>
          </form>
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

          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="nav-menu navbar-nav me-auto mb-2 mb-lg-0 gap-3 fw-medium">
              <li className="nav-item">
                <a className="nav-link links px-3 rounded-pill" aria-current="page" href={"https://react.dev/learn"}>
                  Learn
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link links rounded-pill " href={"https://react.dev/reference/react"}>
                  Reference
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link links rounded-pill" href={"https://react.dev/community"}>
                  Community
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link links rounded-pill" href={"https://react.dev/blog"}>
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link img-fluid" href={"https://react.dev/community/translations"}>
                  <MdOutlineDarkMode className="nav-icons" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link img-fluid">
                  <MdOutlineTranslate className="nav-icons" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link img-fluid" href={"https://github.com/facebook/react/releases"} target={"_blank"}>
                  <IoLogoGithub className="nav-icons" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
