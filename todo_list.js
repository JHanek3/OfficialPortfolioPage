'use strict';

import React from "react";

function ToDoList() {
    return React.createElement(
        "div",
        null,
        React.createElement("input", { type: "checkbox" }),
        React.createElement(
            "p",
            null,
            "Placeholder Text here"
        ),
        React.createElement("input", { type: "checkbox" }),
        React.createElement(
            "p",
            null,
            "Placeholder Text here"
        ),
        React.createElement("input", { type: "checkbox" }),
        React.createElement(
            "p",
            null,
            "Placeholder Text here"
        ),
        React.createElement("input", { type: "checkbox" }),
        React.createElement(
            "p",
            null,
            "Placeholder Text here"
        )
    );
}

var domContainer = document.querySelector('#todo_list_container');
ReactDOM.render(React.createElement(ToDoList, null), domContainer);