import React, {Component} from "react";
import './Counter.css';
class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter1: 0,//Arghya Biswas/a_biswas@ce.iitr.ac.in/arghyarmail@gmail.com/+917980060224
            savedCount: 0
        };
        
    }
    increment = () =>{
        this.setState({
            counter1: this.state.counter1 + 1
        });
    };
    decrement = () =>{
        if(this.state.counter1 > 0)
        this.setState({
            counter1: this.state.counter1 - 1
        });
    };
    savingCounter = () =>{
        this.setState({
            savedCount: this.state.counter1
        });

    }
    render() {
        return(
        <div className="App" id="Supe">
        <div id="load"><div class="loader"></div>
          <button id="save" onClick={this.savingCounter}>Saving counter value</button></div>
          <br/>
          <div id="parent"><button class="child1" onClick={this.decrement}>-</button><div class="child2a"><h1 class="child2">{this.state.counter1}</h1></div><button class="child3" onClick={this.increment}>+</button></div>
          <h1>Counter value: {this.state.savedCount}</h1>
        </div>
      );
    };

}
export default Counter;