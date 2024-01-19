import { calculateInvestmentResults } from "../util/investment";
import { formatter } from "../util/investment";
export default function Result({ userInput }) {
  const resultsData = calculateInvestmentResults(userInput);
  const initialInvestment =
    resultsData[0].valueEndOfYear -
    resultsData[0].interest -
    resultsData[0].annualInvestment;
  console.log(resultsData);
  //   return (
  //     <table id="result">
  //       <thead>
  //         <tr>
  //           <th scope="col">Year</th>
  //           <th scope="col">Investment Value</th>
  //           <th scope="col">Interest(Year)</th>
  //           <th scope="col">Total Interest</th>
  //           <th scope="col">Invested Capital</th>
  //         </tr>
  //       </thead>
  //       <tbody>
  //         <tr className="center">
  //           <th scope="row"></th>
  //           <td>{data.inv}</td>
  //           <td>{data.valueEndOfYear}</td>
  //           <td>{data.annualInvestment}</td>
  //           <td>{userInput.annualInvestment}</td>
  //         </tr>
  //       </tbody>
  //     </table>
  //   );
  return (
    <table id="result">
      <thead>
        <th scope="col">Year</th>
        <th scope="col">Investment Value</th>
        <th scope="col">Interest(Year)</th>
        <th scope="col">Total Interest</th>
        <th scope="col">Invested Capital</th>
      </thead>
      <tbody className="center">
        {resultsData.map((item) => {
          const totalInterest =
            item.valueEndOfYear -
            item.annualInvestment * item.year -
            initialInvestment;
          const totalAmountInvested = item.valueEndOfYear - totalInterest;

          return (
            <tr key={item.year}>
              <td scope="row">{item.year}</td>
              <td>{formatter.format(item.valueEndOfYear)}</td>
              <td>{formatter.format(item.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
