import { useEffect, useState } from "react";

import InvestmentList from "./components/InvestmentList";
import CalculatorInput from "./components/CalculatorInput";
import Header from "./components/Header";

function App() {
  const [state, setState] = useState([]);
  const [initInvest, setInvest] = useState();
  const [isInput, setIsInput] = useState(true);

  useEffect(() => {
    if (state.length === 0) {
      setIsInput(false);
    } else {
      setIsInput(true);
    }
  }, [state]);

  const calculateHandler = (userInput) => {
    const { currentSavings, yearlySavings, expectedReturn, duration } = userInput;
    setInvest(+currentSavings);

    const yearlyData = [];

    let currentSavingsData = +currentSavings;

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavingsData * (+expectedReturn / 100);
      currentSavingsData += yearlyInterest + +yearlySavings;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavingsData,
        yearlyContribution: +yearlySavings,
      });
    }
    setState(yearlyData);
  };

  return (
    <div>
      <Header />
      <CalculatorInput onAddCalculator={calculateHandler} inputstate={setIsInput} />
      {!isInput && <p style={{ textAlign: "center" }}>No investment calculated yet.</p>}
      {isInput && <InvestmentList datas={state} initialInvest={initInvest} />}
    </div>
  );
}

export default App;
