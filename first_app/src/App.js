import React from "react";

import Header from "./Components/Header.js";
import TodoItem from "./Components/TodoItem.js";

import TodoData from "./Data/TodoData.js";

// Main function
const App = () => {

    const firstItem = {
        text: "First item."
    }

    const items = TodoData.map((item) => {
        return (
            <TodoItem key={item.id} tdItem = {item}/>
        )
    });

    return (
        <html>
            <Header />
            <form>
                {items}
            </form>
        </html>
    )
}

export default App;