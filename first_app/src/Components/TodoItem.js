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
      <label className={this.state.completed ? "completed" : ""} for="item1">{this.state.text}</label>
  {this.state.speederName ? <span><br/><label>{this.state.speederName}</label></span> : ""}
      </span>;

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
    // Fetch dummy starwars data, and update the state with the new data.
    fetch("https://swapi.dev/api/vehicles/14/")
    .then(Response => Response.json())
    .then((data) => {
      console.log(data);
      this.setState({
        isLoading: false,
        speederName: data.name
      });
    });
  }

}


export default TodoItem;