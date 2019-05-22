import React, { Component } from "react";
import BodyActivateSavings from "./BodyActivateSavings";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";

export default class ActivateSavings extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <BodyActivateSavings />
        <Footer />
      </div>
    );
  }
}
