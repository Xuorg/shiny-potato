import './App.css';
import { useState } from "react";
import { recettes, RecetteType } from './recettes';
import { ButtonGroup, Button, Container, Row, Col, Badge } from "react-bootstrap";

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
      <Container fluid>
        <Row>
          <Col sm={2}>
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
          </Col>
          <Col>
            { selectedRecette &&
              <div class="Recette">
                <div class="Recette-name">
                  <h1>
                    { selectedRecette.name }
                  </h1>
                </div>
                <div class="Recette-timers">
                  <span class="Recette-timer">
                    Préparation : { selectedRecette.prepTime }
                  </span>
                  <span class="Recette-timer">
                    Cuisson : { selectedRecette.cookingTime }
                  </span>
                </div>
                <div class="Recette-persons">
                  Ingrédients : { selectedRecette.nbPersonnes } personnes
                </div>
                { selectedRecette.comment &&
                  <div class="Recette-comment">
                    "{ selectedRecette.comment }"
                  </div>
                }
                <div class="Recette-ingredients">
                  {
                    selectedRecette.ingredients.map((ingredient) => (
                      <Button
                        disabled
                        size="lg"
                        variant="outline-dark"
                        className="btn-ingredient"> 
                        { ingredient.name }
                        { ingredient.quantity > 0 &&
                          <Badge
                            text="dark"
                            className="badge-quantity">
                            { ingredient.quantity + ingredient.unity }
                          </Badge>
                        }
                      </Button>
                    ))
                  }
                </div>
                <div class="Recette-steps">
                  {
                    selectedRecette.steps.map((step) => (
                      <div>{ step }</div>
                    ))
                  }
                </div>
              </div>
            }
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
