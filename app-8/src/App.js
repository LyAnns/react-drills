import React, {Component} from 'react';
import './App.css';
import axios from 'axios'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      person: {}
    }
  }

  render() {

    return (
        <div className="App">
          <ul className="List">
            <li>Name: {this.state.person.name}</li>
            <li>Height: {this.state.person.height}</li>
            <li>Mass: {this.state.person.mass}</li>
            <li>Hair color: {this.state.person.hair_color}</li>
            <li>Skin color: {this.state.person.skin_color}</li>
            <li>Eye color: {this.state.person.eye_color}</li>
            <li>Birth year: {this.state.person.birth_year}</li>

          </ul>

        </div>
    );
  }

  componentDidMount() {
    console.log("Calling API")
    axios.get("https://swapi.dev/api/people/5").then(response => {
      console.log("API call received...")
      console.log(response)
      return this.setState({person: response.data})
    })
  }


}

export default App;
