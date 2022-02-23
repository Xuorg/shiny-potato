import './App.css';
import { useState } from "react";
import { recettes, RecetteType } from './recettes';
import { ButtonGroup, Button } from "react-bootstrap";

function App() {
  const [filter, setFilter] = useState(RecetteType.ENTREE);
  const [selectedRecette, setSelectedRecette] = useState();

  const filteredRecettes = recettes.filter((recette) => recette.type === filter);

  function changeType(type) {
    setFilter(type);
    setSelectedRecette();
  }

  return (
    <div>
       <ButtonGroup aria-label="Basic example">
      {
        Array.from(Object.values(RecetteType)).map((type) => (
          <Button
            variant="secondary"
            key={type}
            onClick={() => changeType(type)}>{type}</Button>
        ))
      }
      </ButtonGroup>
      <ButtonGroup vertical>
        {
          filteredRecettes.map((recette) => (
            <Button
              key={recette.name}
              onClick={() => setSelectedRecette(recette)}>{recette.name}</Button>
          ))
        }
      </ButtonGroup>
      {
        selectedRecette && selectedRecette.name
      }
    </div>
  );
}

export default App;
