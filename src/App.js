import React, { Component } from 'react';
import './App.css'
import InputField from "./components/inputField.js"; 

class App extends Component {
  constructor(props){
    super(props);
      this.state = {
        input1:"",
        input2:"",
        input3:"",
        input4:""
      };
  }

  handleInputField1 = (e) => {
    
    let text = e.target.value;
    
    console.log(text);
    this.setState({
      input1:text
    })
    console.log(this.firstInput);

    if(text.length <=16){
      let temp = text.length;
      let storedText = text.match(/.{1,4}/g);
      if(temp/4 >= 3 ){
        console.log(storedText);
        this.setState({
          input1: storedText[0],
          input2: storedText[1],
          input3: storedText[2],
          input4: storedText[3]
        })
        this.fourthInput.focus();
      }else if(temp/4 >= 2){
        console.log(storedText);
        this.setState({
          input1: storedText[0],
          input2: storedText[1],
          input3: storedText[2],
          input4: storedText[3]
        })
        this.thirdInput.focus();
      }else if(temp/4 >= 1){
        console.log(storedText);
        this.setState({
          input1: storedText[0],
          input2: storedText[1],
          input3: storedText[2],
          input4: storedText[3]
        })
        this.secondInput.focus();
      }else{
        return false;
      }
      
    }
    
    if(text.length === 4){
      this.secondInput.focus();
    }
    
  }

  handleInputField2 = (e) => {
    
    let text = e.target.value;
    console.log(text);
  
    if(text.length > 4){
      return false;
    }else {
      this.setState({
        input2:text
      })
    }
    if(text.length === 4){
      this.thirdInput.focus();
    }
    if(text.length === 0 ){
      this.firstInput.focus();
    }
  }

  handleInputField3 = (e) => {
    
    let text = e.target.value;
    console.log(text);
    if(text.length > 4){
      return false;
    }else {
      this.setState({
        input3:text
      })
    }
  
    if(text.length === 4){
      this.fourthInput.focus();
    }
    if(text.length === 0 ){
      this.secondInput.focus();
    }
  }

  handleInputField4 = (e) => {
    
    let text = e.target.value;
    if(text.length > 4){
      return false;
    }else {
      console.log(text);
      this.setState({
        input4:text
      })
    }
    if(text.length === 0){
      this.thirdInput.focus();
    }
    
  }
  render() {
    return (
      <div>
        <div className = "container">
          <span className = "container-text">
            Card no -
          </span>
          <InputField reference = {(n)=>{this.firstInput = n}} onChange = {(e)=>{this.handleInputField1(e) }} value = {this.state.input1}/>
          <InputField reference = {(n)=>{this.secondInput = n}} onChange = {(e)=>{this.handleInputField2(e) }} value = {this.state.input2}/>
          <InputField reference = {(n)=>{this.thirdInput = n}} onChange = {(e)=>{this.handleInputField3(e) }} value = {this.state.input3}/>
          <InputField reference = {(n)=>{this.fourthInput = n}} onChange = {(e)=>{this.handleInputField4(e) }} value = {this.state.input4}/>
         
          </div>
          
        
      </div>
    )
  }
}

export default App;