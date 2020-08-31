import React from "react";

class TodoItem extends React.Component {
  render() {
    return (
      <span>
        <input
          type="checkbox"
          name="item1"
          checked={this.props.tdItem.completed}
        />
        <label for="item1">{this.props.tdItem.text}</label>
        <hr />
      </span>
    );
  }
}

export default TodoItem;
