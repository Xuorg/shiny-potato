export const RecetteType = {
  ENTREE: 'Entrée',
  PLAT: 'Plat',
  DESSERT: 'Dessert',
  BOISSON: 'Boisson',
}

class Ingredient {
  constructor(name, quantity = 0, unity = '') {
    this.name = name;
    this.quantity = quantity;
    this.unity = unity;
  }
}

export const recettes = [
  {
    name: 'Carottes vichy',
    type: RecetteType.PLAT,
    prepTime: 20,
    cookingTime: 20,
    image: '',
    nbPersonnes: 2,
    comment: '',
    ingredients: [
      new Ingredient('carottes', 2),
      new Ingredient('beurre', 25, 'g'),
      new Ingredient('sucre', 5, 'g'),
      new Ingredient('bouillon', 1),
    ],
    steps: [
      'Eplucher les carottes et couper-les en petites rondelles.',
      'Dans une casserole, préparer un bouillon de poulet. La quantité d\'eau doit être suffisante pour recouvrir les carottes.',
      'Dans une poêle, faire fondre le beurre. Ajouter les carottes. Remuer un peu puis, y ajouter le bouillon et le sucre.',
      'Laisser à petit feu sans couvrir afin de permettre à l\'eau de s\'évaporer pendant 20/25 minutes.',
    ]
  },
  {
    name: 'Feuilletés au chèvre et aux pommes',
    type: RecetteType.ENTREE,
    prepTime: 5,
    cookingTime: 15,
    image: '',
    nbPersonnes: 4,
    comment: 'La pomme peut être remplacée par de la poire.',
    ingredients: [
      new Ingredient('pommes', 1),
      new Ingredient('chèvre', 150, 'g'),
      new Ingredient('pâte feuilleté', 1),
      new Ingredient('oeuf', 1),
      new Ingredient('ciboulette'),
    ],
    steps: [
      'Avec un verre découpez 8 rondelles dans la pâte feuilletée.',
      'Coupez 4 rondelles de fromage de chèvre de 1,5 à 2 cm de large.',
      'Coupez 4 rondelles de pomme (enlevez d\'abord la peau et les pépins).',
      'Faites une sorte de hamburger de la façon suivante : une rondelle de pâte + une rondelle de pomme + une rondelle de chèvre + ciboulette ou herbes + une rondelle de pâte.',
      'Collez les bords des rondelles de pâte (astuce : humecter légèrement les bords avec de l\'eau pour qu\'elles collent).',
      'Faites dorer avec le jaune d\'oeuf.',
      'Enfournez à feu moyen à fort pendant 15 min jusqu\'à ce que la pâte soit dorée et cuite. Servez chaud avec de la salade verte ou de la mâche.',
    ]
  },
  {
    name: 'Fondue aux poireaux',
    type: RecetteType.PLAT,
    prepTime: 30,
    cookingTime: 30,
    image: '',
    nbPersonnes: 2,
    comment: '',
    ingredients: [
      new Ingredient('poireau', 1),
      new Ingredient('beurre', 15, 'g'),
      new Ingredient('moutarde de Dijon', 1/2, 'c.à.s'),
      new Ingredient('crème de soja', 1, 'c.à.s'),
      new Ingredient('jus de citron', 1, 'c.à.s'),
      new Ingredient('sel'),
      new Ingredient('poivre'),
    ],
    steps: [
      'Coupez les poireaux en deux et recoupez-les en tronçons. Lavez soigneusement.',
      'Faites fondre le beurre dans une casserole, ajoutez les poireaux, mélangez, couvrez et faites cuire à feu très doux pendant 25 min environ, en remuant de temps en temps.',
      'A ce moment là ajoutez le jus de citron, la moutarde et la crème aux poireaux, salez légèrement, poivrez et mélangez bien.',
      'Couvrez et laissez cuire encore 10 min à feu doux.',
    ]
  },
  {
    name: 'Houmous au Mr Cuisine',
    type: RecetteType.ENTREE,
    prepTime: 0,
    cookingTime: 0,
    image: '',
    nbPersonnes: 4,
    comment: '',
    ingredients: [
      new Ingredient('pois chiche', 300, 'g'),
      new Ingredient('ail', 1, 'gousse'),
      new Ingredient('jus de citron', 4, 'c.à.s'),
      new Ingredient('huile d\'olive', 2.5, 'c.à.s'),
      new Ingredient('tahiné', 4, 'c.à.s'),
    ],
    steps: [
      'Versez les pois chiches et leur jus dans la cuve de votre Monsieur Cuisine, puis faites chauffer pendant 6 min / vit. 1 / 120°C.',
      'Pelez les gousses d\'ail, puis enlevez leur germe. Versez dans la cuve avec le tahini, le jus de citron et l\'huile d\'olive, puis mixez finement pendant 30 sec / vit. 4 à 10 / 0 °C. Réservez au moins 2 heures au réfrigérateur.',
    ]
  },
  {
    name: 'Soupe de carottes au curry',
    type: RecetteType.DESSERT,
    prepTime: 15,
    cookingTime: 20,
    image: '',
    nbPersonnes: 2,
    comment: '',
    ingredients: [
      new Ingredient('carottes', 1/2, 'kg'),
      new Ingredient('oignon', 1),
      new Ingredient('bouillon de légumes', 1/2, 'l'),
      new Ingredient('huile d\'olive', 2.5, 'c.à.s'),
      new Ingredient('poivre'),
      new Ingredient('curry en poudre', 1/2, 'c.à.c'),
    ],
    steps: [
      'Emincer carottes et oignons.',
      'Mettre les carottes, les oignons, le bouillon et un peu de poivre dans une casserole. Porter à ébullition, couvrir et laisser mijoter 20 mn, jusqu\'à ce que les carottes soient très tendres.',
      'Retirer du feu et laisser légèrement refroidir.',
      'Passer la soupe au mixer ou au moulin à légumes. Ajouter le curry et mélanger.'
    ]
  },
  {
    name: 'Pickles de betteraves rouges',
    type: RecetteType.ENTREE,
    prepTime: 30,
    cookingTime: 5,
    image: '',
    nbPersonnes: 2,
    comment: '',
    ingredients: [
      new Ingredient('betterave rouge', 450, 'g'),
      new Ingredient('vinaigre de cidre', 35, 'cl'),
      new Ingredient('sel', 4, 'c.à.c'),
      new Ingredient('sucre roux', 2, 'c.à.s'),
      new Ingredient('poivre noir', 2, 'c.à.c'),
      new Ingredient('cumin', 1, 'c.à.c'),
    ],
    steps: [
      'Épluchez les betteraves et retirez les parties terreuses ou abîmées. Coupez-les en cubes d’1 cm. Mélangez-les avec 2 c. à café de sel et laissez dégorger pendant 1 h.',
      'Rincez abondamment pour retirer le sel et placez les dés de betteraves dans le bocal.',
      'Portez à ébullition le vinaigre, 2 c. à café de sel, le sucre et les épices. Vous pouvez adapter les épices à vos goûts.',
      'Recouvrez les betteraves du liquide bouillant.',
      'Fermez le bocal et laissez refroidir à température ambiante.',
      'Laissez macérer 24 h au moins avant de déguster. Les pickles peuvent se conserver plusieurs mois dans un placard, et au réfrigérateur après ouverture.',
    ]
  },
]
