import React, {Component} from 'react';
import './App.css';
import NewTask from "./NewTask";
import List from "./List";


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    }
  }

  addTask(new_task) {
    this.setState({
      tasks: this.state.tasks.concat(new_task),
    })
  }

  render() {
    return (
        <div className="App">
          <h1>My to-do list:</h1>
          <NewTask taskCallback={this.addTask.bind(this)}/>
          <List tasks={this.state.tasks}/>
        </div>
    )
  }

}

export default App;
