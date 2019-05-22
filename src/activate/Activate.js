import React, { Component } from "react";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import BodyActivate from "./BodyActivate";

export default class Activate extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <BodyActivate />
        <Footer />
      </div>
    );
  }
}
