import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../img/undraw_savings_hjfl.svg";

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
                      color: "#144499",
                      fontSize: 25,
                      fontFamily: "Varela Round"
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
                <p className="my-4">
                  {" "}
                  Physical Office Address: No. 40, Winners Avenue, Eneka,
                  Port Harcourt, Nigeria. <b>0700 945 900 945 (Mon-Fri from 9am-5pm) -
                  contact@kolosave.com</b>
                </p>
                <p> © 2016 - 2019 KoloTech Global Limited - RC 1405222</p>
              </div>
            </div>
            <div className="col-sm-auto">
              <h3
                className="mt-5 text-center"
                style={{ fontFamily: "Varela Round", color: "#545454" }}
              >
                COMPANY
              </h3>
              <div
                className="nav flex-column text-center"
                style={{ fontFamily: "Montserrat" }}
              >
                <Link to="" className="my-1" style={{ color: "#545454" }}>
                  <p>About</p>
                </Link>
                <Link to="" className="my-1" style={{ color: "#545454" }}>
                  <p>FAQs</p>
                </Link>
                <Link to="" className="my-1" style={{ color: "#545454" }}>
                  <p>Terms of Use</p>
                </Link>
                <Link to="" className="my-1" style={{ color: "#545454" }}>
                  <p>Privacy Policy</p>
                </Link>
              </div>
              <div
                className="flex-column text-center"
                style={{ color: "#545454" }}
              >
                <button type="button" className="btn text-warning p-2">
                  <i className="fab fa-facebook" style={{color: '#144499'}}/>
                </button>{" "}
                <button type="button" className="btn text-warning p-2">
                  <i className="fab fa-instagram" style={{color: '#144499'}}/>
                </button>
                <button type="button" className="btn text-warning p-2">
                  <i className="fab fa-twitter-square" style={{color: '#144499'}} />
                </button>
              </div>
            </div>
            <div className="col-sm-auto">
              <h3
                className="mt-5 text-center"
                style={{ fontFamily: "Varela Round", color: "#545454" }}
              >
                QuickLinks
              </h3>
              <div
                className="nav flex-column text-center"
                style={{ fontFamily: "Montserrat", color: "#545454" }}
              >
                <Link to="" className="my-1" style={{ color: "#545454" }}>
                  <p>AutoSave™</p>
                </Link>
                <Link to="" className="my-1" style={{ color: "#545454" }}>
                  <p>KoloLink</p>
                </Link>
                <Link to="" className="my-1" style={{ color: "#545454" }}>
                  <p>Quick Save™</p>
                </Link>
                <Link to="" className="my-1" style={{ color: "#545454" }}>
                  <p>SafeLock™</p>
                </Link>
                <Link to="" style={{ color: "#545454" }}>
                  <p>Withdrawals & Breaking</p>
                </Link>
                <Link to="" className="my-1" style={{ color: "#545454" }}>
                  <p>Salary Management</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
