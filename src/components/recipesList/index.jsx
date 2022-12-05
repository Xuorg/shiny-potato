import { recettes } from '../../recettes';
import { Row, Card, Container, Col } from "react-bootstrap";

export function RecipesList({filter, setSelectedRecipe}) {
  const filteredRecettes = recettes.filter((recette) => recette.type === filter);

  return (
    <Container>
      <Row>
        <h5 className="recipes-list-type">{filter}</h5>
        {
          filteredRecettes.map((recette, index) => (
            <Col
              xs={6}
              md={3}
              key={index}
              className="mt-2 mb-3">
              <Card
                className="card grow text-center h-100"
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