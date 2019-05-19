import React, { Component } from "react";
import FormVerify from "./FormVerify";
import Footer from "../common/Footer";
import Navbar from "../common/Navbar";

export default class Account extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <FormVerify />
        <Footer />
      </div>
    );
  }
}
