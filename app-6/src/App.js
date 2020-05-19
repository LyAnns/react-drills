import React, {Component} from 'react';
import './App.css';
import Todo from "./Todo";


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            new_task: "",
            tasks: []
        }
    }

    addClicked() {
        this.setState({
            tasks: this.state.tasks.concat(this.state.new_task),
            new_task: ""
        })
    }

    setNewTask(event) {
        this.setState({new_task: event.target.value})
    }

    render() {
        let todoList = this.state.tasks.map(task => (<Todo task={task}/>))
        return (
            <div className="App">
                <h1>My to-do list:</h1>
                <div>
                    <input type="text" name="new-task" value={this.state.new_task} onChange={this.setNewTask.bind(this)}/>
                    <button onClick={this.addClicked.bind(this)}>Add</button>
                </div>
                <ul className="List">
                    {todoList}
                </ul>
            </div>
        )
    }

}

export default App;
