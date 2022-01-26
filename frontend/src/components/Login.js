import React from 'react';

export default class Login extends React.Component {

    state = {
        email : "",
        password : ""
    }

    handleChange = (e) => {
        const {name,value} = e.target
        this.setState({[name] : value})
    }


    handleSubmit = (e) => {
       
    }
    render() {
        return (
            <>
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type = "email" name = "email" placeholder = "email..." required onChange={this.handleChange}></input>
                    <input type ="password" name = "password" placeholder = "password..." required onChange={this.handleChange}></input>
                    <button onSubmit={this.handleSubmit}>Login </button>
                </form>
            </div>
            </>
        )
    }
}