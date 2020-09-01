import React from "react";

import LoadingConditional from "./LoadingConditional.js"

class TodoItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      completed: this.props.tdItem.completed,
      text: this.props.tdItem.text,
      isLoading: true
    };

    this.CheckboxOnChange = this.CheckboxOnChange.bind(this);
  }

  render() {

    const content = <span>
      <input type="checkbox"
      name="item1"
      onChange={this.CheckboxOnChange}
      checked={this.state.completed} />
      <label for="item1">{this.state.text}</label></span>;

    return (
      <span>
        {this.state.isLoading ? null : content}
        <LoadingConditional isLoading={this.state.isLoading} />
        <hr />
      </span>
    );
  }

  // Handles clicking of the checkbox.
  CheckboxOnChange() {
    this.setState((prev) => {
      return { completed: !prev.completed }
    });
  }

  //Lifecycle method, called after component is rendered.
  componentDidMount() {
    // Mimic a slow API call
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 1500);
  }

}


export default TodoItem;