import React from "react";
import { useState } from "react";
import "./styles.css";

const BmiCalculator = () => {

  const [height, setHeight] = useState("")
  const [weight, setWeight] = useState("")
  const [bmi, setBmi] = useState("")
  const [btnName, setBtnName] = useState("calculate")

  let handleClick = () => {
    if(btnName==="calculate" && height!=="" && height!=="0" && weight!=="" && weight!=="0"){
      setBmi("your bmi is: " + Math.round(weight/((height/100)*(height/100))));
      setBtnName("reset")
    } else{
      setHeight("")
      setWeight("")
      setBmi("")
      setBtnName("calculate")
    }
  }


  return (
    <div className="bmiCalculator__main">
      <h1 className="bmiCalculator__title">BMI Calculator</h1>

      <p className="bmi__p">
        insert your data
      </p>

      <div>

        <input
            onChange={(event) => {
              setHeight(event.target.value);
            }}
            value={height}
            className="bmi__input"
            type="text"
            placeholder="170"
        />

        <label>cm</label>

      </div>

      <div>

        <input
          onChange={(event) => {
            setWeight(event.target.value);
          }}
          value={weight}
          className="bmi__input"
          type="text"
          placeholder="70"
        />

        <label>kg</label>

      </div>

      <button className="BmiCalculator__btn" onClick={handleClick}>{btnName}</button>

      <p className="BmiCalculator__bmi">{bmi}</p>
    </div>
  );
};

export default BmiCalculator;
