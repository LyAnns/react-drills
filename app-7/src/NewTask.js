import React, {Component} from "react";

class NewTask extends Component {
    constructor(props) {
        super(props)
        this.state = {
            new_task: ""
        }
        this.taskCallback = props.taskCallback
    }

    addTask() {
        this.taskCallback(this.state.new_task)
        this.setState({
            new_task: ""
        })

    }


    setNewTask(event) {
        this.setState({new_task: event.target.value})
    }


    render() {
        return (
            <div>
                <input type="text" name="new-task" value={this.state.new_task} onChange={this.setNewTask.bind(this)}/>
                <button onClick={this.addTask.bind(this)}>Add</button>
            </div>
        )
    }
}

export default NewTask