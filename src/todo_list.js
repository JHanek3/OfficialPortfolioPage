'use strict';
import React from "react"

function ToDoList() {
    return (
        <div>
            <input type="checkbox"/>
            <p>Placeholder Text here</p>

            <input type="checkbox"/>
            <p>Placeholder Text here</p>

            <input type="checkbox"/>
            <p>Placeholder Text here</p>

            <input type="checkbox"/>
            <p>Placeholder Text here</p>
        </div>
    )
}


let domContainer = document.querySelector('#todo_list_container');
ReactDOM.render(<ToDoList/>, domContainer);