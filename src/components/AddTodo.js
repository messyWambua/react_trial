import React, { Component } from "react";

export class AddTodo extends Component {
  state = {
    title: ""
  };

  typing = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
      e.preventDefault();
      this.props.addTodo(this.state.title);
      this.setState({title : ''});
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
          <input
            type="text"
            name="title"
            placeholder="Add todo"
            onChange={this.typing}
            value={this.state.title}
            style={{ flex: 10, padding: "5px 5px" }}
          />
          <input type="submit" placeholder="Submit" style={{ flex: 1 }} />
        </form>
      </div>
    );
  }
}

export default AddTodo;
