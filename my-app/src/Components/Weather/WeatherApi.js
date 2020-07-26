import React, {useEffect, useState} from 'react';
import "../../compCSS/Weather.css";
import Daily from "./Daily"
import axios from "axios"
import API_KEY from "./key"

function WeatherAPI() {
  const [apiData, setApiData] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=41.8781&lon=-87.6298&exclude=current,minutely,hourly&appid=${API_KEY}`
    const fetchData = async () => {
      const response = await axios.get(url)
      setApiData(response.data.daily)
      setIsLoaded(true)
    }

    fetchData()
    
  }, [])

  function remove(){
    delete apiData[7]
  }

  return (
    
    <div className="App">
      <header className="header">
        <h1 className="header-text">7-Day Forecast</h1>
      </header>
      {isLoaded ? remove(): null}
      {isLoaded ? <Daily apiData={apiData} />: <p>Loading</p> }
      
    </div>
  );
}

export default WeatherAPI;
