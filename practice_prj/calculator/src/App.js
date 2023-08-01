import { useEffect, useState } from "react";

import InvestmentList from "./components/InvestmentList";
import CalculatorInput from "./components/CalculatorInput";
import Header from "./components/Header";

function App() {
  const [state, setState] = useState([]);
  const [initInvest, setInvest] = useState();
  const [isInput, setIsInput] = useState(false);

  useEffect(() => {
    if (state.length === 0) {
      setIsInput(true);
    } else {
      setIsInput(false);
    }
  }, [state]);

  const calculateHandler = (userInput) => {
    const { currentSavings, yearlySavings, expectedReturn, duration } = userInput;
    setInvest(+currentSavings);
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    const yearlyData = []; // per-year results

    let currentSavingsData = +currentSavings; // feel free to change the shape of this input object!

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavingsData * (+expectedReturn / 100);
      currentSavingsData += yearlyInterest + +yearlySavings;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavingsData,
        yearlyContribution: +yearlySavings,
      });
    }
    setState(yearlyData);

    // do something with yearlyData ...
  };
  // console.log(calculateHandler(DUMMY));

  return (
    <div>
      <Header />
      <CalculatorInput onAddCalculator={calculateHandler} inputstate={setIsInput} />
      {isInput && <p>No investment calculated yet.</p>}
      {!isInput && <InvestmentList datas={state} initialInvest={initInvest} />}
    </div>
  );
}

export default App;
