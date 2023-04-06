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
    type: RecetteType.ENTREE,
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
  {
    name: 'Gratin de pâtes',
    type: RecetteType.PLAT,
    prepTime: 15,
    cookingTime: 15,
    image: '',
    nbPersonnes: 2,
    comment: `Vous pouvez réaliser une multitude de variantes en ajoutant du bleu d'Auvergne, du fromage de chèvre...
Remplacez les tomates par d'autres légumes lorsqu'elles ne sont pas de saison: carottes, champignons, courgettes, broccoli...`,
    ingredients: [
      new Ingredient('lardons', 100, 'g'),
      new Ingredient('pâtes', 200, 'g'),
      new Ingredient('champignons', 2),
      new Ingredient('tomate', 1),
      new Ingredient('crème', 3, 'c.à.s'),
      new Ingredient('gruyère'),
    ],
    steps: [
      'Cuire les pâtes.',
      'Pendant ce temps, faire revenir les lardons.',
      'Couper la tomate en dés et les champignons en lamelles.',
      'Mélanger dans un plat à gratin les légumes, les lardons et les pâtes.',
      'Ajouter la crème fraîche.',
      'Terminer par une généreuse couche de gruyère râpé.',
      'Enfourner à four chaud (180°) et laisser cuire jusqu\'à ce que le gruyère prenne une jolie couleur dorée',
    ]
  },
  {
    name: 'Gratin de carottes et courgettes au chèvre',
    type: RecetteType.PLAT,
    prepTime: 20,
    cookingTime: 30,
    image: '',
    nbPersonnes: 2,
    comment: ``,
    ingredients: [
      new Ingredient('carottes', 165, 'g'),
      new Ingredient('courgettes', 165, 'g'),
      new Ingredient('oignon', 1),
      new Ingredient('crème', 10, 'cl'),
      new Ingredient('bûche de chèvre', 1),
      new Ingredient('oeuf', 1),
      new Ingredient('huile d\'olive'),
      new Ingredient('poivre'),
      new Ingredient('muscade'),
      new Ingredient('persil'),
      new Ingredient('basilic'),
      new Ingredient('ciboulette'),
    ],
    steps: [
      'Epluchez les carottes et les courgettes et coupez les. Emincez les oignons.',
      'Faites revenir à la poêle dans une cuillère à soupe d\'huile d\'olive les carottes et les oignons.',
      'Ajoutez les courgettes et faites cuire jusqu\'à ce qu\'ils soient un peu dorés (plus ou moins 10 min) en remuant souvent.',
      'Préparez l\'appareil en mélangeant les oeufs, la crème, le lait, au fouet.',
      'Découpez une des bûchettes de chèvre en petits morceaux et intégrez dans le mélange ci-dessus.',
      'Salez (attention, pas trop, à cause du chèvre qui sale déjà), poivrez et ajoutez la noix de muscade.',
      'Mélangez délicatement les légumes avec l\'appareil et versez dans un plat à gratin. Coupez l\'autre buchette de chèvre en tranches et répartissez les sur le dessus du méli-mélo.',
      'Enfournez à four chaud (210°C - thermostat 7) pour 30 min, jusqu\'à ce que le dessus soit un peu doré. Parsemez d\'herbes fraîches ou congelées et servez.',
    ]
  },
  {
    name: 'Cake aux olives, tomates séchées et comté',
    type: RecetteType.ENTREE,
    prepTime: 25,
    cookingTime: 45,
    image: '',
    nbPersonnes: 8,
    comment: `Possible d'ajouter les oeufs (blancs + jaunes) sans les battre en neige`,
    ingredients: [
      new Ingredient('farine', 250, 'g'),
      new Ingredient('levure chimique', 0.5),
      new Ingredient('oeufs', 3),
      new Ingredient('huile d\'olive', 12, 'cl'),
      new Ingredient('lait', 12, 'cl'),
      new Ingredient('gousse d\'ail', 2),
      new Ingredient('olives', 20),
      new Ingredient('tomates séchées', 15),
      new Ingredient('gruyère rapé', 80, 'g'),
      new Ingredient('comté', 40, 'g'),
      new Ingredient('poivre'),
      new Ingredient('sel'),
    ],
    steps: [
      'Éplucher et hacher l\'ail. Couper les olives en morceaux, ainsi que les tomates séchées.',
      'Mélanger la farine avec la levure, ajouter les jaunes d\'œufs, le lait et l\'huile progressivement en fouettant. Poivrer.',
      'Battre les blancs en neige avec une pincée de sel. Les incorporer délicatement à la préparation.',
      'Ajouter les morceaux d\'olive, de tomate séchée, et l\'ail, ainsi que les fromages râpés. Bien mélanger.',
      'Verser l\'appareil dans un moule à cake, faire cuire au four préchauffé à 200°C, thermostat 6-7, pendant 45 minutes. Laisser refroidir.',
    ]
  },
  {
    name: 'Gratin de gnocchis tomates basilic',
    type: RecetteType.PLAT,
    prepTime: 10,
    cookingTime: 15,
    image: '',
    nbPersonnes: 4,
    comment: ``,
    ingredients: [
      new Ingredient('gnocchis', 800, 'g'),
      new Ingredient('sauce tomate', 20, 'cl'),
      new Ingredient('gruyère rapé', 150, 'g'),
      new Ingredient('basilic'),
    ],
    steps: [
      'Préchauffez le four à 220°C.',
      'Faire cuire les gnocchis pendant 1 minute dans une casserole d\'eau bouillante.',
      'Égouttez-les.',
      'Versez les gnocchis dans un plat allant au four.',
      'Recouvrez avec la sauce tomates, le gruyère rapé et le basilic. Mélangez.',
      'Enfournez pendant 15 minutes jusqu\'à ce que le gratin soit légèrement doré',
    ]
  },
  {
    name: 'Pâtes au saumon et à la crème',
    type: RecetteType.PLAT,
    prepTime: 20,
    cookingTime: 10,
    image: '',
    nbPersonnes: 4,
    comment: ``,
    ingredients: [
      new Ingredient('pâtes', 300, 'g'),
      new Ingredient('citron', 1/2),
      new Ingredient('crème fraiche', 25, 'cl'),
      new Ingredient('saumon', 120, 'g'),
      new Ingredient('câpres', 1, ' c.à.s'),
      new Ingredient('aneth'),
    ],
    steps: [
      'Dans une grande casserole d\'eau bouillante salée, faites cuire les pâtes comme indiqué sur le paquet.',
      'Dans un bol, fouettez la crème, le saumon coupé en petit morceaux, les câpres, l\'aneth, le jus de citron.',
      'Égouttez les pâtes puis remettez les dans la casserole, sur feu doux.',
      'Ajoutez la crème au saumon. Réchauffez 5 minutes en mélangeant.',
    ]
  },
  {
    name: 'Chili con carne',
    type: RecetteType.PLAT,
    prepTime: 45,
    cookingTime: 60,
    image: '',
    nbPersonnes: 4,
    comment: ``,
    ingredients: [
      new Ingredient('haricots rouges', 300, 'g'),
      new Ingredient('oignon', 1),
      new Ingredient('boeuf haché', 500, 'g'),
      new Ingredient('tomates pelées', 150, 'g'),
      new Ingredient('ail', 2),
      new Ingredient('sauce tomate', 40, 'cl'),
      new Ingredient('cumin, origan, sel, poivre'),
    ],
    steps: [
      'Égouttez les haricots rouges.',
      'Hachez les oignons et les faire revenir dans une poêle avec de l\'huile jusqu\'à ce qu\'ils deviennent translucide.',
      'Ajoutez la viande hachée, mélangez et remuez sur feu moyen.',
      'Ajoutez les tomates coupées, l\'origan, le cumin, la sauce tomate et laissez mijoter 5 minutes.',
      'Ajoutez les haricots rouges. Mélangez et laissez cuire 20 minutes à feu doux.',
    ]
  },
    {
    name: 'Aiguillettes de poulet au riz',
    type: RecetteType.PLAT,
    prepTime: 10,
    cookingTime: 20,
    image: '',
    nbPersonnes: 2,
    comment: ``,
    ingredients: [
      new Ingredient('aiguillettes de poulet', 300, 'g'),
      new Ingredient('riz', 60, 'g'),
      new Ingredient('sauce tomate'),
      new Ingredient('cube de bouillon de volaille'),
      new Ingredient('eau', 1, 'l'),
    ],
    steps: [
      'Mettez les aiguillettes de poulet à revenir dans une poêle creuse.',
      'Une fois les aiguillettes revenues, ajoutez l\'eau et le cube de bouillon de volaille.',
      'Laissez cuire 10 minutes et ajoutez la sauce tomate et le riz.',
      'Laissez cuire 11 minutes.',
    ]
  },
]
