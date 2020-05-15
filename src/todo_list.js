import React, {useState} from "/react"
import TodoItem from "./todo_list_item"
import todosData from "./../assets/todosData"
import "../css/app.css"

function ToDoList() {
    const [globalData, setGlobalData] = useState(todosData)

  function handleChange(id) {
    setGlobalData(item => {
      const updatedToDos = item.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }

        } 
        return todo
      })
      return updatedToDos
    })
  }

  const itemsData = globalData.map(item => <TodoItem key={item.id} item={item} handleChange={handleChange}/>)


  return(
    <div className="todo-list">
      {itemsData}
    </div>
  )
}


let domContainer = document.querySelector('#todo_list_container');
ReactDOM.render(<ToDoList/>, domContainer);