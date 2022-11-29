import { Button, Badge, Container } from "react-bootstrap";

export function SelectedRecipe({selectedRecipe}) {
  return (
    <Container>
      <div style={{ display: 'flex' }}>
        { selectedRecipe &&
          <div className="Recette">
            <div className="Recette-name">
              <h1>
                { selectedRecipe.name }
              </h1>
            </div>
            <div className="Recette-timers">
              <span className="Recette-timer">
                Préparation : { selectedRecipe.prepTime }
              </span>
              <span className="Recette-timer">
                Cuisson : { selectedRecipe.cookingTime }
              </span>
            </div>
            <div className="Recette-persons">
              Ingrédients : { selectedRecipe.nbPersonnes } personnes
            </div>
            { selectedRecipe.comment &&
              <div className="Recette-comment">
                "{ selectedRecipe.comment }"
              </div>
            }
            <div className="Recette-ingredients">
              {
                selectedRecipe.ingredients.map((ingredient, index) => (
                  <Button
                    disabled
                    size="lg"
                    variant="outline-dark"
                    key={index}
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
            <div className="Recette-steps">
              {
                selectedRecipe.steps.map((step, index) => (
                  <div key={index}>{ step }</div>
                ))
              }
            </div>
          </div>
        }
      </div>
    </Container>
  )
}