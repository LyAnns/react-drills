import React, {Component} from 'react';

import './App.css';
import {HashRouter, Link, Route, Switch} from "react-router-dom";
import axios from 'axios'

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            films: []
        }
    }

    render() {
        const filmList = this.state.films.map(film=>{

            const link = "details/"+film.url.split("/")[5]
            return (<li><Link to={link}>{film.episode_id} : {film.title}</Link></li>)
        })
        return (
            <div className="App">
                <h1>Films:</h1>
                <ul className="List">
                    {filmList}
                </ul>

            </div>
        );
    }

    componentDidMount() {
        console.log("Calling API")
        axios.get("https://swapi.dev/api/films/").then(response => {
            console.log("API call received...")
            console.log(response)
            return this.setState({films: response.data.results})
        })
    }

}

class Details extends Component {

    constructor(props) {
        super(props);

        this.state = {
            film: {}
        }
    }

    render() {

        return (
            <div className="App">
                <h1>Film details:</h1>
                <ul className="List">
                    <li>Title: {this.state.film.title}</li>
                    <li>Episode#: {this.state.film.episode_id}</li>
                    <li>Release date: {this.state.film.release_date}</li>
                    <li>Director: {this.state.film.director}</li>
                </ul>
            </div>
        );
    }

    componentDidMount() {
        console.log("Calling API")
        axios.get("https://swapi.dev/api/films/"+this.props.match.params.id).then(response => {
            console.log("API call received...")
            console.log(response)
            return this.setState({film: response.data})
        })
    }
}

function App() {
    return (
        <HashRouter>
            <div className="App">
                <Switch>
                    <Route exact path="/">
                        <Products/>
                    </Route>
                    <Route exact path="/details/:id" component={Details}/>
                </Switch>
            </div>
        </HashRouter>
    );
}

export default App;
