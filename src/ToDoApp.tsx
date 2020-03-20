import React, { Component } from "react";
//
import TodoHeader from "./components/TodoHader";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
//
import "./TodoApp.css";

export default class TodoApp extends Component {
  state = {
    todos: []
  };

  removeTodo = (index: number) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter((_, i) => i !== index)
    });
  };

  addTag = (index:number, tag: string) =>{
    const todos = this.state.todos;
    const todo = todos[index]
    todo.addTag(tag)
    this.setState({
      todos
    })
  }

  removeTag = (index:number, tag: string) =>{
    const todos = this.state.todos;
    const todo = todos[index]
    todo.removeTag(tag)
    this.setState({
      todos
    })
  }
  handleSubmit = (data: { name: string }) => {
    const todo = new Todo(data.name);
    this.setState({
      todos: [...this.state.todos, todo]
    });
  };

  render() {
    return (
      <div className="content">
        <TodoHeader></TodoHeader>
        <TodoList></TodoList>
        <TodoForm></TodoForm>
      </div>
    );
  }
}
