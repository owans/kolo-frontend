import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Animated } from "react-animated-css";
import logo from "../logo.png";

export default class Header extends Component {
  render() {
    return (
      <div>
        <nav
          className="navbar navbar-expand-lg fixed-top border-bottom shadow-lg navbar-light"
          style={{ backgroundColor: "#f4f6f7" }}
        >
          <div className="container">
            <div className=" col-sm d-flex justify-content-start">
              <Link to="/">
                <img
                  src={logo}
                  className="navbar-brand"
                  width="90"
                  height="50"
                  alt="Company Logo"
                />
                <span
                  className="align-middle"
                  style={{
                    color: "#545454",
                    fontSize: 40,
                    fontFamily: "Baloo Bhai"
                  }}
                >
                  DigiSave
                </span>
              </Link>
            </div>

            <div style={{ fontFamily: "Montserrat" }}>
              <button
                type="button"
                className="btn text-warning"
                style={{ fontSize: 20 }}
              >
                About
              </button>
            </div>

            <div style={{ fontFamily: "Montserrat" }}>
              <button
                type="button"
                className="btn text-warning"
                style={{ fontSize: 20 }}
              >
                Stories
              </button>
            </div>

            <div style={{ fontFamily: "Montserrat" }}>
              <button
                type="button"
                className="btn text-warning"
                style={{ fontSize: 20 }}
              >
                FAQ
              </button>
            </div>

            <div style={{ fontFamily: "Montserrat" }}>
              <button
                type="button"
                className="btn text-warning"
                style={{ fontSize: 20 }}
              >
                Blog
              </button>
            </div>

            <div style={{ fontFamily: "Montserrat" }}>
              <Link to="/login">
                <button
                  type="button"
                  className="btn text-warning"
                  style={{ fontSize: 20 }}
                >
                  Login
                </button>
              </Link>
            </div>

            <Animated
              animationIn="shake"
              animationOut="shake"
              animationInDuration={1000}
              animationOutDuration={1000}
              animationOutDelay={10000}
              animationInDelay={5000}
            >
              <div style={{ fontFamily: "Montserrat" }}>
                <Link to="/signup">
                  <button
                    type="button"
                    className="btn btn-outline-warning px-3 py-3"
                    style={{ color: "#545454", fontSize: 20 }}
                  >
                    Create a Free Account
                  </button>
                </Link>
              </div>
            </Animated>
          </div>
        </nav>
      </div>
    );
  }
}
