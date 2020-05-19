import React, {Component} from 'react';
import './App.css';

let all_elements = ["spaghetti", "ice cream", "sushi", "bologna", "cheese"]

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      elements: all_elements
    }
  }
  handleChange(event) {
    const filter = event.target.value

    let filtered_elements;
    if (filter.length > 0) {
      filtered_elements = all_elements.filter(element=>element.startsWith(filter))
    } else {
      filtered_elements = all_elements
    }

    this.setState({
      elements:  filtered_elements
    })
  }

  render() {
    let elements = this.state.elements.map(element => (<li>{element}</li>))
    return (
        <div className="App">
          <input type="text" name="title"  onChange={this.handleChange.bind(this)}/>
          <ul className="List">{elements}</ul>
        </div>
    );
  }
}

export default App;
