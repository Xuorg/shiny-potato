import { Container, Row, Col, Button, Badge, Card, ListGroup } from "react-bootstrap";

export function SelectedRecipe({selectedRecipe}) {
  let comment = undefined;

  if (selectedRecipe.comment) {
    comment = <Card.Footer className="fst-italic">"{ selectedRecipe.comment }"</Card.Footer>;
  }

  return (
    <Container className="text-center">
      { selectedRecipe &&
        <div>
          <Row className="m-4">
            <Col>
              <h4 className="recipe-name">{ selectedRecipe.name }</h4>
            </Col>
          </Row>
          <Row className="mb-4">
            <Col className="d-flex flex-column justify-content-center">
              <Card>
                <ListGroup>
                  <ListGroup.Item>{ selectedRecipe.nbPersonnes } personnes</ListGroup.Item>
                  <ListGroup.Item>Préparation : { selectedRecipe.prepTime }</ListGroup.Item>
                  <ListGroup.Item>Cuisson : { selectedRecipe.cookingTime }</ListGroup.Item>
                </ListGroup>
                { comment }
              </Card>
            </Col>
            <Col>
                <Card>
                  <ListGroup>
                    { selectedRecipe.ingredients.map((ingredient, index) => (
                      <ListGroup.Item key={index}>
                        { ingredient.name }
                        { ingredient.quantity > 0 &&
                          <Badge
                            text="dark"
                            className="badge-quantity">
                            { ingredient.quantity + ' ' + ingredient.unity }
                          </Badge>
                        }
                      </ListGroup.Item>
                      ))
                    }
                  </ListGroup>
                </Card>
            </Col>
          </Row>
          <Row>
            <ListGroup>
              {
                selectedRecipe.steps.map((step, index) => (
                  <ListGroup.Item
                    key={index}
                    className="border border-0">
                      <span>{ index + 1 + '. ' }</span>
                      <span>{ step }</span>
                  </ListGroup.Item>
                ))
              }
            </ListGroup>
          </Row>
        </div>
      }
    </Container>
  )
}
