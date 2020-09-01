import React from "react"

class App extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            isLoggedIn: this.props.isLoggedIn
        }
        this.ButtonClicked = this.ButtonClicked.bind(this);
    }

    render(){
        return (
        <span>
            <h1>{this.state.isLoggedIn ? "You are logged in!" : "You need to log in!"}</h1>
        <button onClick={this.ButtonClicked}>{this.state.isLoggedIn ? "Log out" : "Log in"}</button>
        </span>
        );
    }

    ButtonClicked(){
        this.setState((prev) => {
            return ({isLoggedIn: !prev.isLoggedIn})
        });
    }
}

export default App;