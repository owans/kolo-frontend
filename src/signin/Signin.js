import React, { Component } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import FormSignin from "./FormSignin";

export default class extends Component {
  render() {
    return (
      <div>
        <Header />
        <FormSignin />
        <Footer />
      </div>
    );
  }
}
