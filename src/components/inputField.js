import React, { Component } from 'react';

class InputField extends Component {
        render() {
                return (
                        <div>
                          <input className = "input-field" type = "text" ref = {this.props.reference} onChange = {this.props.onChange} value = {this.props.value}/>
                        </div>
                )
        }
}

export default InputField;