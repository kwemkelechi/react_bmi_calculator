import React from 'react';
import '../styles/form.css';


class Button extends React.Component {

    render() {
        return (
            <div className="btn" onClick={this.props.onClick}>{this.props.label}</div>
        )
    }
}

export default Button;