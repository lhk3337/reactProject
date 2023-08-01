import React from "react";
import classes from "./InvestmentList.module.css";
const formatter = new Intl.NumberFormat("ko-KR", {
  style: "currency",
  currency: "KRW",
});
const InvestmentList = ({ datas, initialInvest }) => {
  return (
    <div>
      <table className={classes.result}>
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {datas.map((data) => (
            <tr key={data.year}>
              <td>{data.year}</td>
              <td>{formatter.format(Math.round(data.savingsEndOfYear))}</td>
              <td>{formatter.format(Math.round(data.yearlyInterest))}</td>
              <td>
                {formatter.format(
                  Math.round(data.savingsEndOfYear - initialInvest - data.yearlyContribution * data.year)
                )}
              </td>
              <td>{formatter.format(Math.round(initialInvest + data.yearlyContribution * data.year))}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InvestmentList;
