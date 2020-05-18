'use strict';

import "./../css/app.css";

function TodoItem(props) {
    var completedStyle = {
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    };

    return React.createElement(
        "div",
        { className: "todo-item" },
        React.createElement("input", {
            type: "checkbox",
            defaultChecked: props.item.completed,
            onChange: function onChange() {
                return props.handleChange(props.item.id);
            }
        }),
        React.createElement(
            "p",
            { style: props.item.completed ? completedStyle : null },
            props.item.text
        )
    );
}

export default TodoItem;