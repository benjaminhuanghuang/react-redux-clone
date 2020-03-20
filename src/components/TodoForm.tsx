import React, { Component, ChangeEvent, FormEvent } from "react";

interface TodoFormProps {
  handleSubmit: Function

}
export default class TodoForm extends Component<TodoFormProps> {
  readonly state = {
    name: ""
  };

  handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  submitForm = (e: FormEvent) => {
    e.preventDefault();
    this.props.handleSubmit(this.state);
    this.setState({
      name: ""
    });
  };
  render() {
    const { name } = this.state;
    return <form onSubmit={this.submitForm}>
      <label>Name:</label>
      <input type="text" name="name" value={name} onChange={this.handleChange} autoComplete="off"></input>
      <input type="button" value="Add" onClick={this.submitForm}></input>
    </form>;
  }
}
