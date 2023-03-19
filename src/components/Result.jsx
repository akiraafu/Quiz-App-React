import React from "react";

const Result = ({ countCorrectAnswers }) => {
  return (
    <>
      <p>
        You got <strong>{countCorrectAnswers}</strong> correct!
      </p>
      <p>Thank you for playing!</p>
    </>
  );
};

export default Result;
