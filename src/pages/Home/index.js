import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Home = () => {
  return (
    <main>
      <h1>BMI</h1>
      <p className="home__p">
        Body mass index (BMI) is a value derived from the mass (weight) and height of a person.
        The BMI is defined as the body mass divided by the square of the body height
      </p>
      <Link className="home__calcBtn" to="/bmi">
        Measure your BMI
      </Link>
    </main>
  );
};

export default Home;
