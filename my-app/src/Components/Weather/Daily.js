import React from "react";
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import "../../compCSS/Weather.css"

function Daily(props) {
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

  return(
    <div>
      <CardGroup className="weatherGroup">
        {props.apiData.map((i) => (
          <Card className="weatherCard" key={i.dt} style={{ border: '1px solid black' }}>
            <Image className="icon"src={`http://openweathermap.org/img/wn/${i.weather[0].icon}@2x.png`}></Image>
            <Card.Body>
              <Card.Title className="cardTitle">{days[new Date(i.dt * 1000).getDay()]}</Card.Title>
                <div className="weather">{(i.weather[0].description).replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()})}</div>
                <div className="temp"><strong>{Math.round((i.temp.day - 273.15) * (9/5) + 32)}<span>&#176;</span>F</strong></div>
                <div className="fTemp">Feels like {Math.round((i.temp.day - 273.15) * (9/5) + 32)}<span>&#176;</span>F</div>
                {/* <br></br>
                <h5 className="tempHeader">Night Temp</h5>
                <div className="temp"><strong>{Math.round((i.feels_like.day - 273.15) * (9/5) + 32)}<span>&#176;</span>F</strong></div>
                <div className="fTemp">Feels like {Math.round((i.feels_like.night - 273.15) * (9/5) + 32)}<span>&#176;</span>F</div> */}
            </Card.Body>
          </Card>
        ))}
      </CardGroup>
    </div>
  )
}

export default Daily