import "./App.css";
import Numbers from "./components/Numbers";
import Result from "./components/Result";
import Input from "./components/Input";
import { useState } from "react";
function App() {
  const [result, setResult] = useState(0);
  const [operation, setOperation] = useState("");
  function newOperaion() {
    setOperation(operation);
  }
  return (
    <>
      <Input newOperation={operation} />
      <Result result={result} />
      <Numbers newOperation={newOperaion} />
    </>
  );
}

export default App;
