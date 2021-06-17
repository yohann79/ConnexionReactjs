import React from "react";
import {Component} from "react";
import { Card,CardContent,CardHeader,Container,Typography,Button,TextField } from '@material-ui/core';
import './login.sass';

class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            formData: {}, // Contains login form data
            formSubmitted: false, // Indicates submit status of login form
            loading: false // Indicates in progress state of login form
        }
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        let { formData } = this.state;
        formData[name] = value;

        this.setState({
            formData: formData
        });
    }


    login = (e) => {

        e.preventDefault();
        alert("You are successfully signed in...");
        window.location.reload()

    }

    render() {

        const { errors, formSubmitted } = this.state;

        return (
            <div className="Login">

                    <Card onSubmit={this.login}>
                        <CardContent id="email">
                            <Typography>Utilisateur</Typography>
                            <TextField type="text" name="utilisateur" placeholder="Utilisateur" onChange={this.handleInputChange} />
                        </CardContent>
                        <CardContent id="password">
                            <Typography>Password</Typography>
                            <TextField type="password" name="password" placeholder="Enter your password" onChange={this.handleInputChange} />
                        </CardContent>
                        <Button type="submit" >valider</Button>
                    </Card>

            </div>
        )
    }
}

export default Login;