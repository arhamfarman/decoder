import React, { Component } from "react";
import Counter from "./component";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 7 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };
  handleDelete = (counterId) => {
    console.log("event handler called", counterId);
  };
  render() {
    return (
      <div>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            value={counter.value}
          ></Counter>
        ))}
      </div>
    );
  }
}
export default Counters;
