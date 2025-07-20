import { useState } from "react";

export default function useCalculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const getNumbers = () => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    return [a, b];
  };

  const displayResult = (res) => {
    setResult(res);
  };
  

  const clearFields = () => {
    setNum1("");
    setNum2("");
    setResult("");
  };

  const add = () => {
    const [a, b] = getNumbers();
    displayResult(a + b);
  };

  const subtract = () => {
    const [a, b] = getNumbers();
    displayResult(a - b);
  };

  const multiply = () => {
    const [a, b] = getNumbers();
    displayResult(a * b);
  };

  const divide = () => {
    const [a, b] = getNumbers();
    if (b === 0) displayResult("Error: Divide by zero");
    else displayResult(a / b);
  };

  const power = () => {
    const [base, exp] = getNumbers();
    let res = 1;
    for (let i = 0; i < exp; i++) {
      res *= base;
    }
    if (exp < 0) res = 1 / res;
    displayResult(res);
  };

  return {
    num1,
    setNum1,
    num2,
    setNum2,
    result,
    add,
    subtract,
    multiply,
    divide,
    power,
    clearFields,
  };
}
