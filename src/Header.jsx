import { useState } from "react";
import { ButtonGroup, Button, Row } from "react-bootstrap";
import { RecetteType } from "./recettes";

export function Header() {
  const [filter] = useState(RecetteType.APERITIF);

  const filteredRecettes = 
  return (
    <ButtonGroup aria-label="Basic example">
      {
        Array.from(Object.values(RecetteType)).map((type) => (
          <Button
            variant="secondary"
            key={type}
            onClick={(e) => filterRecettes(type)}>{type}</Button>
        ))
      }
    </ButtonGroup>
  );
}