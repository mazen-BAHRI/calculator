import { useState } from "react";
export default function Numbers({ newOperation }) {
  const [operation, setOperation] = useState("");
  function newOperation() {
    newOperation = operation;
  }
  return (
    <div>
      <button
        className="buttons buttons_digits"
        onClick={() => {
          setOperation((prevOperation) => prevOperation + "7");
          newOperation();
        }}
      >
        7
      </button>
      <button
        className="buttons buttons_digits"
        onClick={() => {
          setOperation((prevOperation) => prevOperation + "8");
          newOperation();
        }}
      >
        8
      </button>
      <button
        className="buttons buttons_digits"
        onClick={() => {
          setOperation((prevOperation) => prevOperation + "9");
          newOperation();
        }}
      >
        9
      </button>
      <button
        className="buttons buttons_operations"
        onClick={() => {
          setOperation((prevOperation) => prevOperation + "/");
          newOperation();
        }}
      >
        /
      </button>
      <button
        className="buttons buttons_digits"
        onClick={() => setOperation((prevOperation) => prevOperation + "4")}
      >
        4
      </button>
      <button
        className="buttons buttons_digits"
        onClick={() => setOperation((prevOperation) => prevOperation + "5")}
      >
        5
      </button>
      <button
        className="buttons buttons_digits"
        onClick={() => setOperation((prevOperation) => prevOperation + "6")}
      >
        6
      </button>
      <button
        className="buttons buttons_operations"
        onClick={() => setOperation((prevOperation) => prevOperation + "*")}
      >
        *
      </button>
      <button
        className="buttons buttons_digits"
        onClick={() => setOperation((prevOperation) => prevOperation + "1")}
      >
        1
      </button>
      <button
        className="buttons buttons_digits"
        onClick={() => setOperation((prevOperation) => prevOperation + "2")}
      >
        2
      </button>
      <button
        className="buttons buttons_digits"
        onClick={() => setOperation((prevOperation) => prevOperation + "3")}
      >
        3
      </button>
      <button
        className="buttons buttons_operations"
        onClick={() => {
          setOperation((prevOperation) => prevOperation + "-");
          newOperation();
        }}
      >
        -
      </button>
      <button
        className="buttons buttons_operations"
        onClick={() => {
          setOperation((prevOperation) => prevOperation + "=");
          newOperation();
        }}
      >
        =
      </button>
      <button
        className="buttons buttons_digits"
        onClick={() => {
          setOperation((prevOperation) => prevOperation + "0");
          newOperation();
        }}
      >
        0
      </button>
      <button
        className="buttons buttons_digits"
        onClick={() => {
          setOperation((prevOperation) => prevOperation + ".");
          newOperation();
        }}
      >
        .
      </button>
      <button
        className="buttons buttons_operations"
        onClick={() => {
          setOperation((prevOperation) => prevOperation + "+");
          newOperation();
        }}
      >
        +
      </button>

      <button
        className="buttons_reset"
        onClick={() => {
          setOperation("");
          newOperation();
        }}
      >
        AC
      </button>
    </div>
  );
}
