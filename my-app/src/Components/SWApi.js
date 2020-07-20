import React, {useEffect, useState} from 'react';
import {pi} from 'mathjs'
import Table from 'react-bootstrap/Table'
import Plot from 'react-plotly.js';
import "../compCSS/SWApi.css"


function SWApi() {
  
  const [apiData, setApiData] = useState([])

  useEffect(() => {
    const url = "https://swapi.dev/api/planets/"
    fetch(url)
      .then(res => res.json())
      .then(result => {
        setApiData(result.results)
      })
      .catch(e => console.error(e))
  }, [])

  function expo(x, f) {
    return Number.parseFloat(x).toExponential(f)
  }


  return (
    <div className="App">
      <header>
        <h1 className="header">Star Wars Planets vs. Earth</h1>
      </header>
      <Table striped bordered hover variant="dark" >
      <thead>
        <tr>
          <th>Name</th>
          <th>Diameter (km)</th>
          <th>Rotational Period (hours)</th>
          <th>Orbital Period (days)</th>
          <th>Climate</th>
          <th>Terrain</th>
          <th>Population</th>
          <th>Population Density (per km^2)</th>
        </tr>
      </thead>
      <tbody>
        {apiData.map((planet, i) => (
          <tr key={i}>
            <td>{planet.name}</td>
            <td>{planet.diameter}</td>
            <td>{planet.rotation_period}</td>
            <td>{planet.orbital_period}</td>
            <td>{planet.climate}</td>
            <td>{planet.terrain}</td>
            <td>{expo(planet.population, 2)}</td>
            <td>{expo(planet.population / (pi *(planet.diameter / 2)**2), 2)}</td>
          </tr>
        ))}
        <tr key={"earth"}>
          <td>Earth</td>
          <td>12,742</td>
          <td>24</td>
          <td>365</td>
          <td>temperate</td>
          <td>All of the above</td>
          <td>{expo(7800000000, 2)} people</td>
          <td>{expo( 7800000000 / (pi * (12742 / 2)**2), 2)}</td>
        </tr>
      </tbody>
    </Table>
    <Plot className="plot"
        data={[
          {
              x: ["Tatooine", "Alderaan", "Yavin IV", "Hoth", "Dagobah", "Bespin", "Endor", "Naboo", "Coruscant", "Kamino", "Earth"],
              y: [.00233, 16.3, .0000122, 0, 0, .000549, 1.59, 39.0, 8500, 3.27, 61.2],
              type: 'bar'
          }
        ]}
        layout={ {yaxis: {range: [-1, 100]},  width: 1250, height: 500, title: 'Star Wars Population Density compared to Earth', textalign: 'center'} }
      />
    </div>
  );
}

export default SWApi;