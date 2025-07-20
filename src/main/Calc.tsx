// @ts-ignore
import useCalculator from "../hooks/useCalculator";
import styled from "styled-components";


export const CalculatorContainer = styled.div`
  max-width: 500px;
  margin: 40px auto;
  padding: 25px;
  background: #fffbe6;
  border-radius: 20px;
  text-align: center;
  border: 2px dashed #ffd54f;
`;

export const Inputs = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 20px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const InputGroup = styled.div`
  flex: 1;
  text-align: left;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  font-size: 1.2em;
  border: 2px solid #ffe082;
  border-radius: 10px;
  text-align: center;
  background-color: #fffde7;
`;

export const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  margin-bottom: 20px;
      background-color: #4db6ac;
    color: white;
    border: none;
    font-size: 1.2em;
    padding: 10px 20px;
    border-radius: 50px;
    cursor: pointer;
`;
export default function Calc() {
  const {
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
  } = useCalculator();

  const isNegative = !isNaN(result) && parseFloat(result) < 0;

  return (
    
        <CalculatorContainer>
    <div className="calculator">
      

      <Input
        type="number"
        placeholder="First Number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        id="first-number"
      />
      <Input
        type="number"
        placeholder="Second Number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        id="second-number"
      />
       
      <div className="button-row">
        <Buttons onClick={add}>+</Buttons>
        <Buttons onClick={subtract}>−</Buttons>
        <Buttons onClick={multiply}>×</Buttons>
        <Buttons onClick={divide}>÷</Buttons>
        <Buttons onClick={power}>^</Buttons>
        <Buttons onClick={clearFields}>Clear</Buttons>
      </div>
      
      <div id="output" className={isNegative ? "negative" : ""}>
        {result}
      </div>
    </div>
    </CalculatorContainer>
  
  );
}
