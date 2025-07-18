import React, { Component } from 'react';

class FormClass extends Component {
    constructor(props) {
        super(props) 

        this.state = {
            username : '',
            comments : ''
        }
    }

    handleUsernameChange = event => {
        this.setState({ username : event.target.value});
    };

    handleTopicChange = event => {
        this.setState({ topic : event.target.value });
    };

    handleSubmit = event => {
        alert(`Username : ${this.state.username}, Topic :  ${this.state.topic}`);
        event.preventDefault();
    };
      render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                <div>
                    <label>Username : </label>
                    <input type = "text" value = {this.state.username} onChange = {this.handleUsernameChange} />
                </div>
                <div>
                    <label>Topic : </label>
                    <select value = {this.state.topic} onChange = {this.handelTopicChange}>
                        <option value = "react">React</option>
                        <option value = "angular">Angular</option>
                        <option value = "vue">Vue</option>
                    </select>
                </div>
                <button type = "submit">Submit</button>
            </form>
        );
      }
}

export default FormClass;