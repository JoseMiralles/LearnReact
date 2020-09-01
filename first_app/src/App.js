import React from "react";

import Header from "./Components/Header.js";
import TodoItem from "./Components/TodoItem.js";

import TodoData from "./Data/TodoData.js";


class App extends React.Component{

    constructor(){
        super();
        this.state = {
            to_dos: TodoData
        };
    }

    render () {
        const items = this.state.to_dos.map((item)=>{
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