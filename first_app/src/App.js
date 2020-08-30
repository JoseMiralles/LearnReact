import React from "react";

import Header from "./Components/Header.js";
import TodoItem from "./Components/TodoItem.js";

// Main function
const App = () => {

    const firstItem = "Take out trash";

    return (
        <html>
            <Header />
            <form>
                <TodoItem text="Enter text."/>
            </form>
        </html>
    )
}

export default App;