import ReactDOM from "react-dom";
import { VictoryLine, VictoryChart } from "victory";
import React from "react";
import Button from "@material-ui/core/Button";

function CSVToArray(csv) {
  var lines = csv.split("\n");
  return lines.splice(1, lines.length)
}

const firstGraph = CSVToArray(MMM1M);
const secondGraph = CSVToArray(MMM3M);
const thirdGraph = CSVToArray(MMM6M);
const fourthGraph = CSVToArray(MMM1Y);

class Graph extends React.Component {
  constructor(){
    super();
    this.state = {graph: firstGraph}
  }
  
  onClick1 = () => { this.setState({graph: firstGraph}) }
  onClick2 = () => { this.setState({graph: secondGraph}) }
  onClick3 = () => { this.setState({graph: thirdGraph}) }
  onClick4 = () => { this.setState({graph: fourthGraph}) }
  
  render() {
    return (
      <div className="row">
        <Button color="primary" onClick={() => {this.onClick1()}} >1 month</Button>   
        <Button color="primary" onClick={() => {this.onClick2()}} >3 months</Button> 
        <Button color="primary" onClick={() => {this.onClick3()}} >6 months</Button>   
        <Button color="primary" onClick={() => {this.onClick4()}} >1 year</Button>
     {<VictoryChart width='1000' height='500'>
    <VictoryLine data={this.state.graph} x='Date' y='Price' />
    </VictoryChart>}                                
    </div>
    )
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Graph />, rootElement);
