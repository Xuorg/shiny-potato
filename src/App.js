import { Header } from "./components/header/index"
import { RecipesList } from "./components/recipesList"
import { useState } from "react";
import { RecetteType } from './recettes';
import { SelectedRecipe } from './components/selectedRecipe';
import './App.css';

function App() {
  const [filter, setFilter] = useState(RecetteType.ENTREE);
  const [selectedRecipe, setSelectedRecipe] = useState();

  return (
    <div className="main">
      <Header onClick={(type) => { setFilter(type); setSelectedRecipe(undefined) }} />
      {
        !!selectedRecipe ?
          <SelectedRecipe selectedRecipe={selectedRecipe} /> :
          <RecipesList filter={filter} setSelectedRecipe={setSelectedRecipe} />
      }
    </div>
  );
}

export default App;