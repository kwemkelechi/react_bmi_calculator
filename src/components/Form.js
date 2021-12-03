import React from 'react';
import TextInput from './TextInput.js';
import Button from './Button.js';
import '../styles/form.css';

class Form extends React.Component {
    constructor(props){
        super(props);
        this.weightChange = this.weightChanged.bind(this);
        this.heightChange = this.heightChanged.bind(this);
        this.computeBmi = this.computeBmi.bind(this);
        this.getBmi = this.getBmi.bind(this);
        this.state = {bmi: 0};
        this.state = {bmiClass: ""};
    }

    weightChanged(weightValue){
        this.setState({weight: weightValue});
    }

    heightChanged(heightValue){
        this.setState({height: heightValue});
    }

    computeBmi(){
        let bmiValue = (this.state.weight/(this.state.height * this.state.height));
        this.setState({bmi:bmiValue});
        let bmiClass = this.getBmi(bmiValue);
        this.setState({bmiClass: bmiClass});
    }

    getBmi(bmi){
        if(bmi < 18.5) {
            return "Underweight";
        }
        if(bmi >= 18.5 && bmi < 24.9){
            return "Normal Weight";
        }
        if (bmi >= 25 && bmi < 29.9){
            return "Overweight";
        }
        if(bmi >= 30){
            return "Obesity";
        }
    }

    render() {
        return(
            <div>
                <div className="row">
                    <h2 className="title">CALCULATE YOUR BODY MASS INDEX</h2>
                    <p>Body mass index (BMI) is a measure of body fat based on height and weight that applies to adult men and women.</p>
                    <p>This calculator provides body mass index (BMI) and the corresponding BMI weight status category for adults 20 years and older.</p>
                </div>
                <div className="form">
                    <TextInput label="Height (m)" placeholder="Enter height in meters" onChange={this.heightChange}/>     
                    <TextInput label="Weight (kg)" placeholder="Enter weight in kg" onChange={this.weightChange} />
                </div>
                <div className="row">
                    <Button label = "SUBMIT" onClick={this.computeBmi} />
                </div>
                <div className="row">
                    <h3 className="label">BMI : {this.state.bmi}</h3>
                    <h3 className="label">BMI Status : {this.state.bmiClass}</h3>
                </div>
            </div>
        )
    }
}


export default Form;