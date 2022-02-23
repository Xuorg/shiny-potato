export const RecetteType = {
  ENTREE: 'Entrée',
  PLAT: 'Plat',
  DESSERT: 'Dessert',
  BOISSON: 'Boisson',
}

class Ingredient {
  constructor(name, quantity, unity = '') {
    this.name = name;
    this.quantity = quantity;
    this.unity = unity;
  }
}

export const recettes = [
  {
    name: 'riz aux épinards',
    type: RecetteType.ENTREE,
    prepTime: 10,
    cookingTime: 30,
    ingredients: [
      new Ingredient('riz', 60, 'g'),
      new Ingredient('oignon', 1),
    ],
    steps: [
      'lavez',
      'faire revenir',
    ]
  },
  {
    name: 'poulet aux épinards',
    type: RecetteType.PLAT,
    prepTime: 10,
    cookingTime: 30,
    ingredients: [
      new Ingredient('riz', 60, 'g'),
      new Ingredient('oignon', 1),
    ],
    steps: [
      'lavez',
      'faire revenir',
    ]
  },
  {
    name: 'poulet aux épinaaards',
    type: RecetteType.PLAT,
    prepTime: 10,
    cookingTime: 30,
    ingredients: [
      new Ingredient('riz', 60, 'g'),
      new Ingredient('oignon', 1),
    ],
    steps: [
      'lavez',
      'faire revenir',
    ]
  },
]
