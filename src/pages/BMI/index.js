import React from "react";
import "./styles.css";
import BmiCalculator from "../../components/BmiCalculator";
import BmiImg from "../../assets/bmi.jpg"

const BMI = () => {
  return (
    <main>
      <BmiCalculator/>
      <img className="BMI__img" src={BmiImg}/>
    </main>
  );
};

export default BMI;
