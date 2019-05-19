import React, { Component } from "react";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import BodyActivateInvestment from "./BodyActivateInvestment";

export default class ActivateInvestment extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <BodyActivateInvestment />
        <Footer />
      </div>
    );
  }
}
