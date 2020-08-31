import React from "react"

const TodoItem = (properties) => {
    return (
        <span>
            <input type="checkbox" name="item1" />
            <label for="item1">{properties.tdItem.text}</label>
            <br />
        </span>
    )
}

export default TodoItem;