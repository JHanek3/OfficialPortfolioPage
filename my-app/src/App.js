import React from "react"
import "./App.css"
import List from "./components/ToDo/ToDoList"
import MemeGenerator from "./components/MemeGenerator/MemeGenerator"
import Quote from "./components/Quote/Quote"
import SpeedTypingGame from "./components/SpeedTypingGame"
import PicSome from "./components/PicSome/PicSome.js"
import Cart from "./pages/Cart"
import Calculator from "./components/Calculator"
import SWApi from "./components/SWApi"
import CRUD from "./components/CRUD"
import WeatherAPI from "./components/Weather/WeatherApi"
import SWChar from "./components/SWChar/SWChar"
import {Link, Switch, Route} from "react-router-dom"

function App() {
  return(
    <div>
      <p>This is the project staging area, I haven't completly figured out how to anchor link a pure html file to work with a react app's Switch and Router hooks. It's probably just easier to make
        this whole landing page into a react app, but that'll be after I finish some more projects.
      </p>
      <Link to="/List">ToDo List</Link> || <Link to="/FunReads">A Quote a Day</Link> || <Link to="/Meme">Meme Generator</Link> || <Link to="/SpeedTypingGame">Speed Typing Game</Link> || <Link to="/Calculator">Calculator App</Link> || <Link to="/PicSome">Pic Some App</Link>
       || <Link to="/SWApi">Star Wars API w/ Plotly</Link>  || <Link to="/SWChar">Star Wars Character API</Link>  || <Link to="/Crud">CRUD App, no DB Backend</Link>  || <Link to="/Weather">Weather API</Link>
      <hr></hr>
      <Switch>
        <Route exact path="/List"><List/></Route>
        <Route exact path="/FunReads"><Quote/></Route>
        <Route exact path="/Meme"><MemeGenerator/></Route>
        <Route exact path="/SpeedTypingGame"><SpeedTypingGame/></Route>
        <Route exact path="/Calculator"><Calculator/></Route>
        <Route exact path="/PicSome"><PicSome/></Route>
        <Route exact path="/PicSome/Cart"><Cart/></Route>
        <Route exact path="/SWApi"><SWApi/></Route>
        <Route exact path="/SWChar"><SWChar/></Route>
        <Route exact path="/Crud"><CRUD/></Route>
        <Route exact path="/Weather"><WeatherAPI/></Route>
        
      </Switch>
    </div>
  )
} 
export default App