import { useEffect, useState } from "react";
const SimpleInput = (props) => {
  const [enterName, setEnterName] = useState("");
  const [enteredNameIsValid, setEnteredNameIsValud] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  useEffect(() => {
    if (enteredNameIsValid) {
      console.log("Name Input is valid");
    }
  }, [enteredNameIsValid]);

  const nameInputChangeHandler = (event) => {
    setEnterName(event.target.value);

    if (event.target.value.trim() !== "") {
      setEnteredNameIsValud(true);
    }
  };

  const nameInputBlurHandler = () => {
    setEnteredNameTouched(true);

    if (enterName.trim() === "") {
      setEnteredNameIsValud(false);
    }
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);

    if (enterName.trim() === "") {
      setEnteredNameIsValud(false);
      return;
    }
    setEnteredNameIsValud(true);
    console.log("stateValue :", enterName);

    setEnterName("");
    /**
     * * ref를 이용한 input value 초기화
     * TODO nameInputRef.current.value = "";
     */
  };

  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const nameInputClasses = nameInputIsInvalid ? "form-control invalid" : "form-control";
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enterName}
          onBlur={nameInputBlurHandler}
          onChange={nameInputChangeHandler}
        />
        {nameInputIsInvalid && <p className="error-text">Name must not be empty.</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

// ref는 여러 입력값을 추합하여 onSubmit할때 이 값을 한번 할때 유용하다
// 즉각적인 유효성 검증을 위해서는 useState를 사용하는 것이 유용하다.
