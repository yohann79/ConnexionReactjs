import React from "react";
import { Card,CardContent,CardHeader,Container,Typography,Button,TextField } from '@material-ui/core';
import './Connexion.css';

interface State {
    formData: {
        utilisateur?: string
        password?: string
    }
    formSubmitted: boolean
}

class Connexion extends React.Component<{}, State> {


    constructor(props: any) {
        super(props)

        this.state = {
            formData: {}, // Contains login form data
            formSubmitted: false, // Indicates submit status of login form

        }
    }

    handleInputChange = (event: any) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;


        let {formData} = this.state;
        formData[name as 'utilisateur' | 'password'] = value;

        this.setState({
            formData: formData
        });
    }


    login = (e: any) => {

        e.preventDefault();
        alert("Connecté !");
        window.location.reload()

    }

    render() {

        const {formSubmitted } = this.state;

        return (
            <div className="Login">
                <form onSubmit={this.login}>
                    <Card>
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
                </form>
            </div>
        )
    }
}

export default Connexion;
