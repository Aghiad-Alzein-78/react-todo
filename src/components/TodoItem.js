import React, { Component } from "react";
import PropTypes from "prop-types";
class TodoItem extends Component {
  getStyle = () => {
    return {
      backgroundColor: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px dotted #ccc",
      textDecoration: this.props.todo.completed ? "line-through" : "none",
    };
  };

  render() {
    const { id, title, completed } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
            checked={completed}
          />
          {"\t"}
          {title}
          {"\t"}
          <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>
            x
          </button>
        </p>
      </div>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};
const btnStyle = {
  backgroundColor: "chocolate",
  color: "white",
  border: "none",
  padding: "5px 9px",
  borderRadius: "50%",
  float: "right",
  cursor: "pointer",
};
export default TodoItem;
