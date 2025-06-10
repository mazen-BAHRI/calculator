import "./App.css";
import Numbers from "./components/Numbers";
import Result from "./components/Result";
import Input from "./components/Input";
import { useState } from "react";
function App() {
  const [result, setResult] = useState(0);
  const [operation, setOperation] = useState("");
  function handleClick(newValue) {
    setOperation((preVoperation) => preVoperation + newValue);
    if (newValue === "reset") {
      setOperation("");
      setResult(0);
    } else if (newValue === "=") {
      try {
        setResult(eval(operation));
      } catch (error) {
        setResult("Error");
      }
    }
  }
  return (
    <>
      <Input operation={operation} />
      <Result result={result} />
      <Numbers handleClick={handleClick} />
    </>
  );
}

export default App;
