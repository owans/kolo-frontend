import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <div className="container border-top my-5 ">
          <div className="row">
            <div className="col-sm">
              {" "}
              <div className=" col-sm-auto d-flex justify-content-start mt-5">
                <Link to="/">
                  <img
                    src={logo}
                    className="navbar-brand"
                    width="90"
                    height="90"
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
                    KoloSave
                  </span>
                </Link>
              </div>
              <div style={{ fontFamily: "Cutive Mono", color: "#545454" }}>
                KoloSave (formerly piggybank.ng) is the largest online savings &
                investing platform in Nigeria. For over 3 years, our customers
                have saved and invested billions of Naira that they would
                normally be tempted to spend.
                <h5 className="my-4">
                  {" "}
                  Physical Office Address: No. 40, Winners Avenue, Eneka,
                  Port Harcourt, Nigeria. 0700 945 900 945 (Mon-Fri from 9am-5pm) -
                  contact@kolosave.com
                </h5>
                <h5> © 2016 - 2019 KoloTech Global Limited - RC 1405222</h5>
              </div>
            </div>
            <div className="col-sm-auto">
              <h3
                className="mt-5 text-center"
                style={{ fontFamily: "Montserrat", color: "#545454" }}
              >
                COMPANY
              </h3>
              <div
                className="nav flex-column text-center"
                style={{ fontFamily: "Montserrat" }}
              >
                <Link to="" className="my-1" style={{ color: "#545454" }}>
                  <h6>About</h6>
                </Link>
                <Link to="" className="my-1" style={{ color: "#545454" }}>
                  <h6>FAQs</h6>
                </Link>
                <Link to="" className="my-1" style={{ color: "#545454" }}>
                  <h6>Terms of Use</h6>
                </Link>
                <Link to="" className="my-1" style={{ color: "#545454" }}>
                  <h6>Privacy Policy</h6>
                </Link>
              </div>
              <div
                className="flex-column text-center"
                style={{ color: "#545454" }}
              >
                <button type="button" className="btn text-warning p-2">
                  <i className="fab fa-facebook" />
                </button>{" "}
                <button type="button" className="btn text-warning p-2">
                  <i className="fab fa-instagram" />
                </button>
                <button type="button" className="btn text-warning p-2">
                  <i className="fab fa-twitter-square" />
                </button>
              </div>
            </div>
            <div className="col-sm-auto">
              <h3
                className="mt-5 text-center"
                style={{ fontFamily: "Montserrat", color: "#545454" }}
              >
                QuickLinks
              </h3>
              <div
                className="nav flex-column text-center"
                style={{ fontFamily: "Montserrat", color: "#545454" }}
              >
                <Link to="" className="my-1" style={{ color: "#545454" }}>
                  <h6>AutoSave™</h6>
                </Link>
                <Link to="" className="my-1" style={{ color: "#545454" }}>
                  <h6>KoloLink</h6>
                </Link>
                <Link to="" className="my-1" style={{ color: "#545454" }}>
                  <h6>Quick Save™</h6>
                </Link>
                <Link to="" className="my-1" style={{ color: "#545454" }}>
                  <h6>SafeLock™</h6>
                </Link>
                <Link to="" style={{ color: "#545454" }}>
                  <h6>Withdrawals & Breaking</h6>
                </Link>
                <Link to="" className="my-1" style={{ color: "#545454" }}>
                  <h6>Salary Management</h6>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
