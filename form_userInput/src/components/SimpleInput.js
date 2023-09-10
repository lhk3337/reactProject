import { useRef, useState } from "react";
const SimpleInput = (props) => {
  const [enterName, setEnterName] = useState("");
  const nameInputRef = useRef();
  const nameInputChangeHandler = (event) => {
    setEnterName(event.target.value);
  };
  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log("stateValue :", enterName);

    const enteredValued = nameInputRef.current.value;
    console.log("refValue :", enteredValued);
    setEnterName("");
    /**
     * * ref를 이용한 input value 초기화
     * TODO nameInputRef.current.value = "";
     */
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" value={enterName} onChange={nameInputChangeHandler} ref={nameInputRef} />
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
