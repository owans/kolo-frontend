import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Animated } from "react-animated-css";
import landing07 from "../img/landing07.png";
import playstore01 from "../img/playstore01.png";
import applestore from "../img/applestore.png";
import shield from "../img/shield.png";
import "./landingpage.css";

export default class Body extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-sm" style={{ color: "#545454", fontSize: 50 }}>
              <span className="align-middle">
                <div
                  className="col-sm"
                  style={{ color: "#545454", fontSize: 50 }}
                >
                  The Better Way To
                </div>
                <div
                  className="col-sm"
                  style={{ color: "#545454", fontSize: 70 }}
                >
                  Save & Invest
                </div>
                <div
                  className="col-sm text_01"
                  style={{ color: "#545454", fontSize: 30 }}
                >
                  DigiSave is your guide to financial security.
                </div>
                <div
                  className="col-sm text_01 my-5"
                  style={{ color: "#545454", fontSize: 30 }}
                >
                  We help you save responsibly and also enable you to invest on
                  the go.
                </div>
                <div
                  className="col-sm text_01"
                  style={{ color: "#545454", fontSize: 30 }}
                >
                  Earn 10% - 13% interests on savings.
                </div>
                <div
                  className="col-sm text_01"
                  style={{ color: "#545454", fontSize: 30 }}
                >
                  Earn over 25% return on investments.
                </div>

                <Animated
                  animationIn="shake"
                  animationOut="shake"
                  animationInDuration="1000"
                  animationOutDuration="1000"
                  animationOutDelay="10000"
                  animationInDelay="5000"
                >
                  <div className="p-5 " style={{ fontFamily: "Baloo Bhai" }}>
                    <Link to="/signup">
                      <button
                        type="button"
                        className="btn border-0 btn-outline-warning px-3 py-3"
                        style={{ color: "#545454", fontSize: 40 }}
                      >
                        Create a Free Account
                      </button>
                    </Link>
                  </div>
                </Animated>

                <button type="button" className="btn mx-5">
                  <img src={playstore01} alt="" />
                  {/* <i class="fab fa-google-play" /> */}
                </button>
                <button type="button" className="btn mx-5">
                  <img src={applestore} alt="" />
                  {/* <i class="fab fa-apple" /> */}
                </button>
              </span>
            </div>
            <div className="d-flex justify-content-end">
              <img src={landing07} width="300" height="760" alt="" />
            </div>
          </div>
        </div>
        <div class="col-sm-auto d-flex justify-content-center top_margin">
          <span
            className="align-middle"
            style={{
              color: "#545454",
              fontSize: 20,
              fontFamily: "Montserrat"
            }}
          >
            <h2>Your Security is our Priority </h2>

            <h6 className="mt-2">
              DigiSave uses the highest levels of Internet Security,
            </h6>

            <h6> and it is secured by 256 bits SSL security encryption</h6>
            <h6>
              {" "}
              to ensure that your information is completely protected from
              fraud.
            </h6>
          </span>
          <img src={shield} alt="" />
        </div>
        <div className="row top_margin">
          <h3 className="col-sm" style={{ fontSize: 40 }}>
            Save smartly & responsibly!
          </h3>
          <div class="w-100" />
          <h6
            className="col-sm"
            style={{ fontFamily: "Cutive Mono", fontSize: 20 }}
          >
            DigiSave helps you reach your savings target much faster with
            various savings types.{" "}
            <p>Plus you can even team up with others to reach joint goals.</p>
          </h6>
        </div>
        <div className="row d-flex justify-content-between">
          <div class=" border-warning m-3" style={{ maxWidth: 400 }}>
            <div class="card-body text-warning">
              <h5
                class="card-title"
                style={{
                  fontSize: 30,
                  fontFamily: "Montserrat",
                  fontWeight: "bolder"
                }}
              >
                Enjoy quarterly savings
              </h5>
              <p
                class="card-text"
                style={{
                  fontSize: 20,
                  fontFamily: "Montserrat",
                  color: "#545454"
                }}
              >
                Join over 100,000 users that use our quarterly savings feature
                called "DigiSave" to reach their general/personal savings goals
                more quickly.
              </p>
            </div>
          </div>
          <div class="border-warning m-3" style={{ maxWidth: 400 }}>
            <div class="card-body text-warning">
              <h5
                class="card-title"
                style={{
                  fontSize: 30,
                  fontFamily: "Montserrat",
                  fontWeight: "bolder"
                }}
              >
                Reach multiple targets
              </h5>
              <p
                class="card-text"
                style={{
                  fontSize: 20,
                  fontFamily: "Montserrat",
                  color: "#545454"
                }}
              >
                Set and reach multiple saving goals you set using our "Target
                Savings" feature, you can save for holidays, fees or even
                special events.
              </p>
            </div>
          </div>
          <div class="border-warning m-3" style={{ maxWidth: 400 }}>
            <div class="card-body text-warning">
              <h5
                class="card-title"
                style={{
                  fontSize: 30,
                  fontFamily: "Montserrat",
                  fontWeight: "bolder"
                }}
              >
                Lock funds away
              </h5>
              <p
                class="card-text"
                style={{
                  fontSize: 20,
                  fontFamily: "Montserrat",
                  color: "#545454"
                }}
              >
                Use our "SafeLock" feature to lock funds away so you don't have
                access until your set date. You also earn over 13% p.a.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
