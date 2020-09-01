import React from "react";

class LoadingConditional extends React.Component{
    
    render(props) {
        return (this.props.isLoading ? <label>loading...</label> : null)
    }
}

export default LoadingConditional;