import { RecetteType } from '../../recettes';
import { Nav } from "react-bootstrap";

export function Header({onClick}) {

  function changeType(type) {
    onClick(type);
  }
  return (
    <Nav justify className="App-header navbar sticky-top rounded">
      {
        Array.from(Object.values(RecetteType)).map((type, index) => (
          <Nav.Item
            key={index}>
            <Nav.Link
              onClick={() => changeType(type)}>{type}</Nav.Link>
          </Nav.Item>
        ))
      }
    </Nav>
  )
}