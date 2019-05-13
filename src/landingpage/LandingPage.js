import React, { Component } from "react";
import Body from "./Body";
import "./landingpage.css";
import Header from "../common/Header";
import Footer from "../common/Footer";

export default class LandingPage extends Component {
  render() {
    return (
      <div className="landing_body">
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}
