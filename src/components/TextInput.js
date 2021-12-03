import React from 'react';
import { render } from 'react-dom';



class TextInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value : '' };
        // binding of 'this' in our constructor to our method handleChange is necessary for 'this' to work in handleChange method
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        let inputValue = event.target.value;
        this.setState({value: inputValue});
        this.props.onChange(inputValue);
        }

    render(){
        return (
            <div>
                <p className="label"><label>{this.props.label}</label></p>
                <input type="text" className="formfield" value={this.state.value} placeholder={this.props.placeholder} onChange={this.handleChange} />
            </div>
        )
    }
}

export default TextInput; 