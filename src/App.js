import React, { Component } from "react"
import PaintingList from "./components/PaintingList";
import paintings from "./paintings.json"
import Logo from "./components/Logo";
import Panel from "./components/Panel/"
import ColorPicker from "./components/ColorPicker"
import Notification from "./components/Notification"
import Layout from "./components/Layout";
import Counter from "./components/Counter"
import DropDown from "./components/DropDown"
import TodoList from "./components/TodoList"


const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "grey", color: "#607D8B" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];

class App extends Component {
  state = {
    todos: [
      { id: "id-1", text: "learn html/css", completed: true },
      { id: "id-2", text: "learn js", completed: true },
      { id: "id-3", text: "learn react", completed: false },
      { id: "id-4", text: "learn node.js", completed: false },
    ],
  };

  deleteTodo = (todoId) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== todoId),
    }));
  };
  render() {
    const { todos } = this.state;
    const completedTodos = todos.reduce((acc, todo) => (todo.completed ? acc + 1 : acc), 0,);
    return (
      <div>
        <h1>sostoyanie komponenta</h1>
        <div>
          <p>amount: {todos.length}</p>
          <p>erledigt: {completedTodos}</p>
        </div>
        {/* <Layout> */}
          <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
          <DropDown />
          <Counter />
          <ColorPicker options={colorPickerOptions} />

          <Notification text="so good" type="success" />
        <Notification text="so bad" type="error" />

        <Panel title="last news">
          <p>
            lorem ipsums sdklöfjsdlk sdofsadöoifh disofjsiodfjs sdiofjsdiofj
            sdiofjsiodfj iofjas dfoij sdpiofjsdi fsiodf
            siofjsdiofjsiodfjsiofjsdifjsödfjsadiöfjasiofjwfjks+oü#kdofksdoäfjsdfg
          </p>{" "}
          <a href="">lesen...</a>
        </Panel>
        <Panel>
          <p>
            lorem ipsums sdklöfjsdlk sdofsadöoifh disofjsiodfjs sdiofjsdiofj
            sdiofjsiodfj iofjas dfoij sdpiofjsdi fsiodf
            siofjsdiofjsiodfjsiofjsdifjsödfjsadiöfjasiofjwfjks+oü#kdofksdoäfjsdfg
          </p>{" "}
        </Panel>
        <Logo text={<h1>First Component</h1>} />
        <PaintingList paintings={paintings} />
        {/* </Layout> */}
      </div>
    );
  }
}
export default App;