import React, {Component} from "react";
import Todo from "./Todo";

class List extends Component {
    render() {
        let todoList = this.props.tasks.map(task => (<Todo task={task}/>))
        return (<ul className="List">
            {todoList}
        </ul>)
    }
}

export default List