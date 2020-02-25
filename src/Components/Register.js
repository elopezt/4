import React, { Component } from 'react';

const initState = {
    username: "",
    email: "",
    password: "",
}

export default class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ...initState,
        }
    }

    submitHandler = event => {
        event.preventDefault();
        let config = {
            method: 'POST',
            headers: {
                'Content-type': 'Application/json'
            },
            body: JSON.stringify(this.state),
        };
        fetch('https://reactcourseapi.herokuapp.com/user/register', config)
            .then(res => res.json())
            .then(data => {
                localStorage.setItem('token', data.token);
                this.setState({...initState})
            }).catch(err => {
                console.log(err);
            })
    }

    changeHandler = (event) => {
        this.setState({
            [event.target.id]: event.target.value,
        })
    }

    render() {
        return (
            <>
                <h1>Registro</h1>
                <form onSubmit={this.submitHandler}>
                    <label>username:
                     <input
                            type="text" id="username" value={this.state.username}
                            onChange={this.changeHandler}
                            value={this.state.username}>
                        </input>
                    </label>

                    <label>Email:
                     <input
                            type="email" id="email" value={this.state.email}
                            onChange={this.changeHandler}
                            value={this.state.email}>
                        </input>
                    </label>

                    <label>Password:
                     <input
                            type="password" id="password" value={this.state.password}
                            onChange={this.changeHandler}
                            value={this.state.password}>
                        </input>
                    </label>
                    <button type="submit">Sign Up
                </button>
                </form>
            </>
        );
    }
}