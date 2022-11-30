import { recettes } from '../../recettes';
import { Row, Card, Container, Col } from "react-bootstrap";

export function RecipesList({filter, setSelectedRecipe}) {
  const filteredRecettes = recettes.filter((recette) => recette.type === filter);

  return (
    <Container>
      <Row>
        {
          filteredRecettes.map((recette, index) => (
            <Col
              xs={3}
              key={index}
              className="mt-1">
              <Card
                className="grow text-center h-100"
                bg="light"
                onClick={() => setSelectedRecipe(recette)}>
                <Card.Body className="d-flex flex-column justify-content-between">
                  <Card.Title>{recette.name}</Card.Title>
                  <Card.Text>prep : {recette.prepTime} min.<br/>cooking : {recette.cookingTime} min.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))
        }
      </Row>
    </Container>
  )
}