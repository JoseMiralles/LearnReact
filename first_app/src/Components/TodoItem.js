import React from "react"

const TodoItem = (p) => {

    return (
        <span>
            <input type="checkbox" name="item1" checked={p.tdItem.completed} />
            <label for="item1">{p.tdItem.text}</label>
            <hr />
        </span>
    )
}

export default TodoItem;