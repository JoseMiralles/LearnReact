import React from "react";

import Header from "./Components/Header.js";
import TodoItem from "./Components/TodoItem.js";

// Main function
const App = () => {

    const firstItem = {
        text: "First item."
    }

    return (
        <html>
            <Header />
            <form>
                <TodoItem tdItem={firstItem}/>
            </form>
        </html>
    )
}

export default App;