import React, { Component } from "react";
class Counter extends Component {
  state = {
    value: this.props.value,
  };
  // constructor() {
  //   super();
  //   console.log("Constructor", this);
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  //////////////////  INCREMENT METHOD

  handleIncrement = (product) => {
    console.log(product);
    console.log("Inrementer Clicked", this);
    this.setState({ value: this.state.value + 1 });
  };

  ///////////////////////
  render() {
    return (
      <div>
        <span className={this.newMethod()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement({ id: 1 })}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.id)}
        >
          Delete
        </button>
      </div>
    );
  }
  newMethod() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
