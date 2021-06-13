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
import Form from "./components/Form/Form"
import TodoEditor from "./components/TodoEditor/TodoEditor"
import shortId from "shortid"
import Filter from "./components/Filter/Filter"
import Modal from "./components/Modal/Modal"


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
    filter: "",
    showModal: false,
  };

  componentDidMount() {
    console.log("add componentDidMount");
    const todos = localStorage.getItem("todos");
    const parsedTodos = JSON.parse(todos);
    if (parsedTodos) {
      this.setState({ todos: parsedTodos });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.todos !== prevState.todos) {
      localStorage.setItem("todos", JSON.stringify(this.state.todos));
    }
  }

  addTodo = (text) => {
    console.log(text);
    const todo = {
      id: shortId.generate(),
      text,
      completed: false,
    };

    this.setState(({ todos }) => ({
      todos: [todo, ...todos],
    }));
  };

  deleteTodo = (todoId) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== todoId),
    }));
  };

  toggleCompleted = (todoId) => {
    // this.setState(prevState => ({
    //   todos: prevState.todos.map(todo => {
    //     if (todo.id === todoId) {
    //       return {
    //         ...todo,
    //         completed: !todo.completed,
    //       };
    //     }
    //     return todo;
    //   }),
    // }));

    this.setState(({ todos }) => ({
      todos: todos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  };

  formSubmitHandler = (data) => {
    console.log(data);
  };

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };
  getVisibleTodos = () => {
    const { filter, todos } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return todos.filter((todo) =>
      todo.text.toLowerCase().includes(normalizedFilter)
    );
  };

  calculateCompletedTodos = () => {
    const { todos } = this.state;

    return todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0
    );
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { todos, showModal } = this.state;
    const completedTodoCount = this.calculateCompletedTodos();
    const visibleTodos = this.getVisibleTodos();
    const totalTodoCount = todos.length;
    return (
      <>
        <DropDown />
        <button type="button" onClick={this.toggleModal}>
          Open Modal
        </button>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <h1>Welcome to React</h1>
            <button type="button" onClick={this.toggleModal}>
              Close
            </button>
          </Modal>
        )}
        {/* <Form onSubmit={this.formSubmitHandler} /> */}
        {/* <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
        ></input> */}
        <h1>sostoyanie komponenta</h1>
        <div>
          <p>amount: {totalTodoCount}</p>
          <p>erledigt: {completedTodoCount}</p>
        </div>
        <Layout>
          <TodoEditor onSubmit={this.addTodo} />
          <Filter value={this.filter} onChange={this.changeFilter} />
          <TodoList
            todos={visibleTodos}
            onDeleteTodo={this.deleteTodo}
            onToggleCompleted={this.toggleCompleted}
          />
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
        </Layout>
      </>
    );
  }
}
export default App;