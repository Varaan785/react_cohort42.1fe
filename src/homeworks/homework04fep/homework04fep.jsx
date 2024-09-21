
//Erste Version
/*
import Button from "../../components/Button/Button";
import React, { useState } from "react";
import Feedback from "../../components/Feedback/Feedback";


const Homework04 = () => {
    console.log(Feedback);
  };
export default Homework04;  */

//Überarbeitet

import Feedback from "../../components/Feedback/Feedback";

import "./styles.css";

function Homework_04() {
  return (
    <div className="homework04-wrapper">
      <Feedback />
    </div>
  );
}

export default Homework_04;