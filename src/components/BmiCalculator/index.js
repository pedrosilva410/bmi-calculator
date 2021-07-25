import React from "react";
import { useState } from "react";
import "./styles.css";

const BmiCalculator = () => {

  const [height, setHeight] = useState("")
  const [weight, setWeight] = useState("")
  const [bmi, setBmi] = useState("")

  let handleClick = () => {
    setBmi("your bmi is: " + weight/((height/100)*(height/100)))
  }


  return (
    <main>
      <h1>BMI Calculator</h1>

      <p className="bmi__p">
        insert your data
      </p>

      <div>

        <input
            onChange={(event) => {
              setHeight(event.target.value);
            }}
            value={height}
            className="bmi__height"
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
          className="bmi__weight"
          type="text"
          placeholder="70"
        />

        <label>kg</label>

      </div>

      <button onClick={handleClick}>calculate</button>

      <p>{bmi}</p>
    </main>
  );
};

export default BmiCalculator;
