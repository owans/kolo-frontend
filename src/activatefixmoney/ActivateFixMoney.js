import React, { Component } from "react";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import BodyActivateFixMoney from "./BodyActivateFixMoney";

export default class ActivateFixMoney extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <BodyActivateFixMoney />
        <Footer />
      </div>
    );
  }
}
