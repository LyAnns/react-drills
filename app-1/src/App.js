import React, {Component} from 'react';
import './App.css';


class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            message: ""
        };
    }
    handleChange(event) {
        this.setState({message: event.target.value})
    }

    render() {

      return (
        <div className="App">
            <input type="text" name="title"  onChange={this.handleChange.bind(this)}/>
            <div>{this.state.message}</div>
        </div>
      );
    }
}

export default App;
