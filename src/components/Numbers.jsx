export default function Numbers({ handleClick }) {
  return (
    <div>
      <button
        className="buttons buttons_digits"
        onClick={() => handleClick("7")}
      >
        7
      </button>
      <button
        className="buttons buttons_digits"
        onClick={() => handleClick("8")}
      >
        8
      </button>
      <button
        className="buttons buttons_digits"
        onClick={() => handleClick("9")}
      >
        9
      </button>
      <button
        className="buttons buttons_operations"
        onClick={() => handleClick("/")}
      >
        /
      </button>
      <button
        className="buttons buttons_digits"
        onClick={() => handleClick("4")}
      >
        4
      </button>
      <button
        className="buttons buttons_digits"
        onClick={() => handleClick("5")}
      >
        5
      </button>
      <button
        className="buttons buttons_digits"
        onClick={() => handleClick("6")}
      >
        6
      </button>
      <button
        className="buttons buttons_operations"
        onClick={() => handleClick("*")}
      >
        *
      </button>
      <button
        className="buttons buttons_digits"
        onClick={() => handleClick("1")}
      >
        1
      </button>
      <button
        className="buttons buttons_digits"
        onClick={() => handleClick("2")}
      >
        2
      </button>
      <button
        className="buttons buttons_digits"
        onClick={() => handleClick("3")}
      >
        3
      </button>
      <button
        className="buttons buttons_operations"
        onClick={() => handleClick("-")}
      >
        -
      </button>
      <button
        className="buttons buttons_operations"
        onClick={() => handleClick("=")}
      >
        =
      </button>
      <button
        className="buttons buttons_digits"
        onClick={() => handleClick("0")}
      >
        0
      </button>
      <button
        className="buttons buttons_digits"
        onClick={() => handleClick(".")}
      >
        .
      </button>
      <button
        className="buttons buttons_operations"
        onClick={() => handleClick("+")}
      >
        +
      </button>

      <button className="buttons_reset" onClick={() => handleClick("reset")}>
        AC
      </button>
    </div>
  );
}
