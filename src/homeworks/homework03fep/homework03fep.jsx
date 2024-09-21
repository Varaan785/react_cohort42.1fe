
// Erste Version
/*
import React from 'react';
import Button from '../../components/Button/Button';

const HomeWork03fep = () => {
  return (
    <div>
      <Button name="Login" type="button" />
    </div>
  );
};

export default HomeWork03fep;  */


//Überarbeitet

import LoginForm from "../../components/LoginForm/LoginForm";

import "./styles.css";

function Homework_03() {
  return (
    <div className="page-wrapper">
      <LoginForm />
    </div>
  );
}

export default Homework_03;