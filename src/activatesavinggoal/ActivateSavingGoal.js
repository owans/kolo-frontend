import React, { Component } from "react";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import BodyActivateSavingGoal from "./BodyActivateSavingGoal";

export default class ActivateSavingGoal extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <BodyActivateSavingGoal />
        <Footer />
      </div>
    );
  }
}
