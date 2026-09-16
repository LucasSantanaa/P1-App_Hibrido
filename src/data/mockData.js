// Dados mockados (fake) usados para simular uma API real.
// Em um app de verdade, isso viria de um backend.

export const categories = [
  { id: 'c1', name: 'Todos', icon: 'grid-outline' },
  { id: 'c2', name: 'Lanches', icon: 'fast-food-outline' },
  { id: 'c3', name: 'Pizzas', icon: 'pizza-outline' },
  { id: 'c4', name: 'Doces', icon: 'ice-cream-outline' },
  { id: 'c5', name: 'Bebidas', icon: 'cafe-outline' },
];

export const products = [
  {
    id: '1',
    category: 'c2',
    name: 'Burger Artesanal',
    restaurant: 'Casa do Burger',
    description:
      'Pão brioche, blend 180g, queijo cheddar, alface, tomate e molho especial da casa.',
    price: 28.9,
    rating: 4.8,
    time: '25-35 min',
    icon: 'fast-food',
  },
  {
    id: '2',
    category: 'c3',
    name: 'Pizza Margherita',
    restaurant: 'Forno de Pedra',
    description:
      'Molho de tomate fresco, mussarela de búfala, manjericão e azeite extra virgem.',
    price: 42.0,
    rating: 4.9,
    time: '35-45 min',
    icon: 'pizza',
  },
  {
    id: '3',
    category: 'c4',
    name: 'Brownie com Sorvete',
    restaurant: 'Doce Ponto',
    description:
      'Brownie de chocolate meio amargo quentinho com bola de sorvete de creme.',
    price: 18.5,
    rating: 4.7,
    time: '15-25 min',
    icon: 'ice-cream',
  },
  {
    id: '4',
    category: 'c5',
    name: 'Suco Natural 500ml',
    restaurant: 'Vida Verde',
    description: 'Suco natural de frutas da estação, sem açúcar adicionado.',
    price: 12.0,
    rating: 4.6,
    time: '10-15 min',
    icon: 'cafe',
  },
  {
    id: '5',
    category: 'c2',
    name: 'Wrap de Frango',
    restaurant: 'Casa do Burger',
    description: 'Tortilha, frango grelhado, alface, tomate e molho iogurte.',
    price: 24.0,
    rating: 4.5,
    time: '20-30 min',
    icon: 'fast-food',
  },
  {
    id: '6',
    category: 'c3',
    name: 'Pizza Calabresa',
    restaurant: 'Forno de Pedra',
    description: 'Molho de tomate, mussarela, calabresa fatiada e cebola.',
    price: 39.9,
    rating: 4.7,
    time: '35-45 min',
    icon: 'pizza',
  },
];
