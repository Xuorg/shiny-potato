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
       <div class="App-header">
         <ButtonGroup size="lg">
          {/* <Button
            variant="secondary"
            class="btn-secondary Button-home"
            key="home"
            onClick={() => changeType(RecetteType.ENTREE)}>Potato</Button> */}
        {
          Array.from(Object.values(RecetteType)).map((type) => (
            <Button
              variant="secondary"
              key={type}
              onClick={() => changeType(type)}>{type}</Button>
          ))
        }
        </ButtonGroup>
      </div>
      <div class="App-content">
        <div class="Vertical-menu">
          <ButtonGroup vertical class="btn-group-vertical btn-group-vertical-left">
            {
              filteredRecettes.map((recette) => (
                <Button
                  class="btn btn-left"
                  key={recette.name}
                  onClick={() => setSelectedRecette(recette)}>{recette.name}</Button>
              ))
            }
          </ButtonGroup>
        </div>
        <div>
          {
            selectedRecette && selectedRecette.name
          }
        </div>
      </div>
    </div>
  );
}

export default App;
