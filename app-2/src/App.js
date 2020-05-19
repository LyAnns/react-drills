import React, {Component} from 'react';

import './App.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            elements: [
                "spaghetti",
                "ice cream",
                "sushi",
                "bologna",
                "cheese"
            ]
        }
    }

    render() {
        let elements = this.state.elements.map(element => (<li>{element}</li>))
        return (
            <div className="App">
                <ul className="List">{elements}</ul>
            </div>
        );
    }
}

export default App;
