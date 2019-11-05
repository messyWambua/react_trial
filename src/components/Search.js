import React, { Component } from "react";
import Todos from "./Todos";
import PropTypes from "prop-types";

class Search extends Component {
  render() {
    console.log(this.props.searches);
    return this.props.searches.map(todo => (
      <Todos
        key={todo.id}
        todo={todo}
        markIt={this.props.markIt}
        delTodo={this.props.delTodo}
      />
    ));
  }
}

Search.protoTypes = {
  searches: PropTypes.array.isRequired
};

export default Search;
