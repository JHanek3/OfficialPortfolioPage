import React, {useState, useEffect} from 'react';
import axios from "axios"
import SWTable from "./SWTable"
import "../../compCSS/SWChar.css"
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'

function SWChar() {

  const [apiData, setApiData] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [searchResults, setSearchResults]= useState([])

  const devUrl = "https://akabab.github.io/starwars-api/api/all.json"

  const fetchData = async() => {
    const response = await axios.get(devUrl)
    setApiData(response.data)
    setIsLoaded(true)
  }

  useEffect(() => {
    fetchData()

  }, [])

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  }


  useEffect(() => {
    if (isLoaded) {
      const results = apiData.filter((char) => {
          return char.name.toLowerCase().includes(searchTerm.toLowerCase())
      })
      
      setSearchResults(results)
    }
  }, [searchTerm])


  return (
    <div className="App">
      <header>
        <h1>Star Wars Characters <Accordion>
          <Accordion.Toggle as={Button} variant="light" eventKey="1000" className="promptBtn">
            My Prompt
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1000">
            <>
              <h5>Fetch data from a JSON API, and present it on the screen (no styling). You should review how to fetch data using Javascript. We are not picky on how you decide to fetch the data.</h5>
              <h5>Style the app using HTML and CSS.</h5>
              <h5>Create a text field, and filter the list of data.</h5>
              <h5>Display more information about the data fetched and create expandable views.</h5>
              </>
          </Accordion.Collapse>
        </Accordion></h1>
      </header>
      <br/>
      
      
      <input
        value={searchTerm}
        onChange={handleSearch}
        type="text"
        placeholder="Character Name"
        aria-label="Character Name"
        className="charInput"
      />
      
      {isLoaded ? (searchTerm ? <SWTable apiData={searchResults}/> : <SWTable apiData={apiData}/> ) :null}
    </div>
  );
}

export default SWChar;