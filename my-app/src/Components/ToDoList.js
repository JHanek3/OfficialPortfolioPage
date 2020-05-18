import React, {useState} from "react"
import TodoItem from "./ToDoItem"
import todosData from "../../../assets/todosData"
import "../App.css"


function List() {
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
export default List