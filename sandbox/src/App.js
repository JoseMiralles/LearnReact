import React from "react"

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            firstName: "Jose",
            lastName: "Miralles",
            isFriendly: true,
            mainHand: "Right Handed"
        };
        this.HandleChange = this.HandleChange.bind(this);
        this.onCheckboxClick = this.onCheckboxClick.bind(this);
        this.onRadioChanged = this.onRadioChanged.bind(this);
    }

    render() {
        return (
            <span>
                <input name="firstName" value={this.state.firstName} type="text" placeholder="First Name" onChange={this.HandleChange} />
                <br />
                <input name="lastName" value={this.state.lastName} type="text" placeholder="Last Name" onChange={this.HandleChange} />
                <br />

                <label>
                <input name="isFriendly" type="checkbox" checked={this.state.isFriendly} onChange={this.onCheckboxClick} />
                Friendly
                </label>
                <br/>

                <label>
                    <input
                    type="radio"
                    name="mainHand"
                    value="Left Handed"
                    checked={this.state.mainHand === "Left Handed"}
                    onChange={this.onRadioChanged}/>Left Handed
                </label>
                <label>
                    <input
                    type="radio"
                    name="mainHand"
                    value="Right Handed"
                    checked={this.state.mainHand === "Right Handed"}
                    onChange={this.onRadioChanged}/> Right Handed
                </label>

                <hr />
                <h3>Stats:</h3>
                <p>{this.state.firstName} {this.state.lastName}</p>
                <p>{this.state.isFriendly ? "Friendly" : "Not friendly"}</p>
                <p>{this.state.mainHand}</p>
            </span>
        );
    }

    HandleChange(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    onCheckboxClick(event) {
        this.setState({
            [event.target.name]: event.target.checked
        });
    }

    onRadioChanged(event){
        this.setState({
            [event.target.name]: event.target.value
        });
    }

}

export default App;