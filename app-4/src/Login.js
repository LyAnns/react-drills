import React, {Component} from "react";

class Login extends Component  {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
    }

    loginClicked() {
        alert("Username: "+this.state.username+ " Password: "+this.state.password)
    }

    setUsername(event) {
        this.setState({username: event.target.value})
    }
    setPassword(event) {
        this.setState({password: event.target.value})
    }

    render() {
        return (
            <div>
                <input type="text" name="username" onChange={this.setUsername.bind(this)}/>
                <input type="text" name="password" onChange={this.setPassword.bind(this)}/>
                <button onClick={this.loginClicked.bind(this)}>Login</button>
            </div>
        )
    }
}
export default Login