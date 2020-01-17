import React from "react";

import Display from "./Display";
import Operators from "../containers/Operators";
import Digits from "../containers/Digits";
import History from "../containers/History";
import ControlPanel from "../containers/ControlPanel";

export const Calculator = ({ curExpression, history: {showHistory, historyArray}, className = "react-calculator" }) => {

  return (
    <main className={className}>
      <Display text={curExpression} />
      <ControlPanel />
      <Digits />
      <Operators />
      <History />
    </main>
  );
};

export default Calculator;
