import React from "react"
import "./App.css"
import Home from "./Components/Home"
import List from "./Components/ToDoList"
import MemeGenerator from "./Components/MemeGenerator"
import {Link, Switch, Route} from "react-router-dom"

function App() {
  return(
    <div>
      <Switch>
        <Route exact path="http://hanekpro.com/my-app/build/index.html"><Home/></Route>
        <Route exact path="/List"><List/></Route>
        <Route exact path="/Meme"><MemeGenerator/></Route>
      </Switch>
    </div>
  )
}
export default App