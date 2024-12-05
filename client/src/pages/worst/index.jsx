import React from "react";
import "./worst.css";
import functionMain, { function1, function2 } from "../../functions/worst";

function Worst() {
  functionMain();
  function1();
  function2();
  return <div>Worst</div>;
}

export default Worst;
