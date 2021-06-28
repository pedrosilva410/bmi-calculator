import React from "react";
import "./styles.css";

const About = () => {
  return (
    <main>
      <h1>About</h1>
      <p className="about__p">
        The BMI is a convenient rule of thumb used to broadly categorize a person as underweight,
        normal weight, overweight, or obese based on tissue mass (muscle, fat, and bone) and height.
        Commonly accepted BMI ranges are underweight (under 18.5 kg/m2), normal weight (18.5 to 25),
        overweight (25 to 30), and obese (over 30).[1] When used to predict an individual's health
        rather than as a statistical measurement for groups, the BMI has limitations that can make
        it less useful than some of the alternatives, especially when applied to individuals with
        abdominal obesity, short stature, or unusually high muscle mass.
      </p>
    </main>
  );
};

export default About;
