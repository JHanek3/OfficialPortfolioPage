var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

import React, { useState } from "/react";
import TodoItem from "./todo_list_item";
import todosData from "./../assets/todosData";
import "../css/app.css";

function ToDoList() {
  var _useState = useState(todosData),
      _useState2 = _slicedToArray(_useState, 2),
      globalData = _useState2[0],
      setGlobalData = _useState2[1];

  function handleChange(id) {
    setGlobalData(function (item) {
      var updatedToDos = item.map(function (todo) {
        if (todo.id === id) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          });
        }
        return todo;
      });
      return updatedToDos;
    });
  }

  var itemsData = globalData.map(function (item) {
    return React.createElement(TodoItem, { key: item.id, item: item, handleChange: handleChange });
  });

  return React.createElement(
    "div",
    { className: "todo-list" },
    itemsData
  );
}

var domContainer = document.querySelector('#todo_list_container');
ReactDOM.render(React.createElement(ToDoList, null), domContainer);