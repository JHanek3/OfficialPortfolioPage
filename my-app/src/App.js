import React from "react"
import "./App.css"
import List from "./Components/ToDoList"
import MemeGenerator from "./Components/MemeGenerator"
import Quote from "./Components/Quote"
import SpeedTypingGame from "./Components/SpeedTypingGame"
import {Link, Switch, Route} from "react-router-dom"

function App() {
  return(
    <div>
      <p>This is the project staging area, I haven't completly figured out how to anchor link a pure html file to work with a react app's Switch and Router hooks. It's probably just easier to make
        this whole landing page into a react app, but that'll be after I finish some more projects.
      </p>
      <Link to="/List">ToDo List</Link> || <Link to="/FunReads">A Quote a Day</Link> || <Link to="/Meme">Meme Generator</Link> || <Link to="/SpeedTypingGame">Speed Typing Game </Link>
      <Switch>
        <Route exact path="/List"><List/></Route>
        <Route exact path="/FunReads"><Quote/></Route>
        <Route exact path="/Meme"><MemeGenerator/></Route>
        <Route exact path="/SpeedTypingGame"><SpeedTypingGame/></Route>
      </Switch>
    </div>
  )
}
export default App