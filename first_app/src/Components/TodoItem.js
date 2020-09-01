import React from "react";

class TodoItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      completed: this.props.tdItem.completed,
      text: this.props.tdItem.text
    };
    this.CheckboxOnChange = this.CheckboxOnChange.bind(this);
  }

  render() {

    return (
      <span>
        <input
          type="checkbox"
          name="item1"
          onChange={this.CheckboxOnChange}
          checked={this.state.completed}
        />
        <label for="item1">{this.state.text}</label>
        <hr />
      </span>
    );
  }

  // Handles clicking of the checkbox.
  CheckboxOnChange(){
    this.setState( (prev) => {
      return {completed: !prev.completed}
    } );
  }

}


export default TodoItem;