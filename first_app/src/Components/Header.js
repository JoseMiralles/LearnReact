import React from "react"

function Header() {

    const FirstName = "Jose";
    const LastName = "Miralles";

    const styles = {
        color: "red",
        backgroundColor:"yellowgreen"
    }

    return (

        <header style={styles} className="navbar">
            {`${FirstName} ${LastName}`}
            <br/>
            {new Date().toLocaleString()}
        </header>

    )
}

export default Header;