import ReactDOM from "react-dom";
import React from "react";
import { VictoryPie } from "victory";

var stockSentiment = {
  bullish: 10,
  neutral: 30,
  bearish: 20
};

const PieChart = () => {
  return <VictoryPie data={[
    { x: "bullish", y: stockSentiment.bullish },
    { x: "neutral", y: stockSentiment.neutral },
    { x: "bearish", y: stockSentiment.bearish }
  ]} />;
};

const rootElement = document.getElementById("root");
ReactDOM.render(<PieChart />, rootElement);
