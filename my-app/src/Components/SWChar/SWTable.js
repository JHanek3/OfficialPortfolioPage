import React from 'react';
import Table from 'react-bootstrap/Table'
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'

function SWTable(props) {

  return (
    <>
    <Table striped bordered hover variant="dark" >
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Height (cm)</th>
              <th>Mass (kg)</th>
              <th>Sex</th>
              <th>Homeworld</th>
            </tr>
          </thead>
          <tbody>
              {props.apiData.map((char, i) => (
                <tr key={i}>
                  <td>{char.id}</td>
                  <td className="hiddenCol">
                    <Accordion>
                      <Accordion.Toggle as={Button} variant="link" eventKey={char.id} style={{color: "white"}}>
                        {char.name}
                      </Accordion.Toggle>
                      <Accordion.Collapse eventKey={char.id}>
                        <ul className="eList">
                         <li>Born: {char.born} BBY</li>
                         <li>{char.died ? `Died: ${char.died} BBY`: "Still alive"}</li>
                         <li className="capitalize">Species: {char.species}</li>
                       </ul>
                      </Accordion.Collapse>
                    </Accordion>
                  </td>
                  <td>{char.height}</td>
                  <td>{char.mass}</td>
                  <td className="capitalize">{char.gender}</td>
                  <td className="capitalize">{char.homeworld}</td>
                </tr>
              ))}
          </tbody>    
    </Table>
  </>
  )
}

export default SWTable