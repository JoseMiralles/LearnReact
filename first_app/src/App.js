import React from "react";

import Header from "./Components/Header.js";
import TodoItem from "./Components/TodoItem.js";

import TodoData from "./Data/TodoData.js";


class App extends React.Component{
    render () {
        const items = TodoData.map((item)=>{
            return <TodoItem key={item.id} tdItem = {item}/>
        });
        return(
            <html>
                <Header/>
                <form>
                    {items}
                </form>
            </html>
        );
    }
}

export default App;