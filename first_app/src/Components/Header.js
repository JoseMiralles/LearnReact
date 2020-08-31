import React from "react"


class Header extends React.Component{
    FirstName = "Jose";
    LastName = "Miralles";
    styles = {
        color: "red",
        backgroundColor:"yellowgreen"
    }
    render(){
        return(
            <header style={this.styles} className="navbar">
                {`${this.FirstName} ${this.LastName}`}
            </header>
        );
    }
}

export default Header;