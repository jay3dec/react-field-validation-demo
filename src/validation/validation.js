import './validation.css';
import React from "react";

class Validation extends React.Component {
    render() {
        if(this.props.state.errors[this.props.field]){
            return (
                <span className="validation-red">
                    * {this.props.message}
                </span>
            )
        }
        return null;
    }
}

export default Validation