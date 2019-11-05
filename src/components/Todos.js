import React, { Component } from "react";
import PropTypes from "prop-types";

export class Todos extends Component {
  getStyle = () => {
    /*
            if(this.props.todo.completed){
                return {
                        textDecoration : 'line-through'
                    } 
                }
            else {
                return{
                    textDecoration : 'none'
                    }
                }
        */
    return {
      textDecoration: this.props.todo.completed ? "line-through" : "none"
    };
  };

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={this.props.markIt.bind(this, id)} />{" "}
          {title}
          <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>
            x
          </button>
        </p>
      </div>
    );
  }
}

Todos.protoTypes = {
  todo: PropTypes.object.isRequired
};
const btnStyle = {
  float: "right",
  padding: "5px 10px",
  color: "#fff",
  background: "#fff000",
  border: "none",
  borderRadius: "50%"
};

export default Todos;
