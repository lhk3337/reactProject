import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "./Card";
const Expenses = ({ data }) => {
  const [filterYear, setFilterYear] = useState(new Date().getFullYear());
  const DropdownChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };
  const filtedExpensee = data.filter((value) => value.date.getFullYear() === +filterYear);

  const resultExpesnseContent =
    filtedExpensee.length === 0 ? (
      <p className="alert_message">No expense found for the year.</p>
    ) : (
      <>
        {filtedExpensee.map((item) => (
          <ExpenseItem key={item.id} {...item} />
        ))}
      </>
    );

  /**
   *
   * ! useState는 React 컴포넌트 안에서 상태를 관리하는 훅으로, 컴포넌트가 렌더링될 때 한 번 초기화되고, 이후 해당 상태를 변경하는 함수를 제공합니다.
   * ! useState를 통해 선언한 상태 변수는 컴포넌트 함수가 호출되는 시점에 한 번 초기화되며, 이후에는 해당 변수가 변경되더라도 함수가 다시 호출되지 않습니다.
   * ! 그렇기 때문에 input에 입력한 데이터가 추가되지 않고 그 초기화된 data만 남아 있어서,
   * TODO const [filterData, setFilterData] = useState(data);을 삭제하고, 새로운 변수를 생성하여 filtering된 값을 적용하여 사용하였습니다.
   */

  return (
    <>
      <Card className="expenses">
        <ExpensesFilter onDropdownChangeHandler={DropdownChangeHandler} />
        {resultExpesnseContent}
      </Card>
    </>
  );
};

export default Expenses;
