import React from "react";
import JumbotronFluid from "./elements/JumbotronFluid";
import Alert from "./elements/Alert";
import Showable from "./elements/Showable";
import ExchangeRates from "./ExchangeRates";
import Select from "./elements/Select";
import Input from "./elements/Input";
import bigMacData from "../big_mac_2017_01";
import { createSelector } from "reselect";

// const getRate = createSelector( rates.redu)

const App = props => {
  const {
    error,
    rates,
    handlers,
    selectedCurrency,
    selectedCompareCurrency,
    comparedRates,
    convertAmount
  } = props;
  let usdRate;
  console.log("props", props);
  const rateSelector = props => props.rate;
  const getRateSelector = createSelector(rateSelector, rates => {
    rates.reduce((acc, rate) => {
      if (rate.Country === "USD") {
        usdRate = rate.Rate;
      }
      return rate.Country === selectedCompareCurrency ? rate.Rate : acc;
    }, null);
  });
  // const rate = rates.reduce((acc, rate) => {
  //   if (rate.Country === "USD") {
  //     usdRate = rate.Rate;
  //   }
  //   return rate.Country === selectedCompareCurrency ? rate.Rate : acc;
  // }, null);
  // const result = rate * convertAmount;
  const conversionSelector = props => props.convertAmount;
  const resultSelector = createSelector(getRateSelector, conversionSelector);
  const burgerPrice = bigMacData.data.map(country => {
    return {
      Country: country.Country,
      Price: (country.dollar_price / usdRate).toFixed(2)
    };
  });
  const selectOptions = rates.map(rate => rate.Country);

  return (
    <div className="container">
      <JumbotronFluid heading="xChange Rates" lead="Use ALL THE MONEY" />
      <Showable show={error}>
        <Alert type="danger">Oops, there was a problem...</Alert>
      </Showable>
      <div className="col-sm-4">
        <h3>Select a Currency</h3>
        <Select
          options={selectOptions}
          onChange={handlers.selectCurrency}
          value={selectedCurrency}
        />
        <ExchangeRates rates={rates} headers={["Country", "Rate"]} />
      </div>
      <div className="col-sm-4">
        <h3>Compare it to another currency, Across THE SPAN OF TIME</h3>
        <Select
          options={selectOptions}
          onChange={handlers.selectCompareCurrency}
          value={selectedCompareCurrency}
        />
        <ExchangeRates rates={comparedRates} headers={["Year", "Rate"]} />
      </div>
      <div className="col-sm-4">
        <h3>
          Convert from {selectedCurrency} to {selectedCompareCurrency}
        </h3>
        <Input value={convertAmount} onChange={handlers.updateConversion} />
        {/* <h4>Result: {result}</h4> */}
        <h4>Result: {resultSelector(props)}</h4>
        resultSelector
      </div>
      <div className="col-sm-4">
        <h3>Big Mac Price in {selectedCurrency}</h3>
        <ExchangeRates rates={burgerPrice} headers={["Country", "Price"]} />
      </div>
    </div>
  );
};

export default App;

//
//
// // Create non-memoized selector functions for
// // non-computed properties
// const getThings = (state) => state.things
// const getFilter = (state) => state.filter
//
// // Create memoized selector function to return computed
// // object only if the inputs change
// const selectComputedData = createSelector(
//   [getThings, getFilter],
//   (things, filters) => {
//     switch (filter) {
//       case 'SHOW_ALL':
//         return things
//       case 'SHOW_OPEN':
//         return things.filter(things => things.open)
//       case 'SHOW_CLOSED':
//         return things.filter(things => !things.open)
//       default:
//         return things
//     }
//   }
// )
//
