const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector('#ingredients');
const element = ingredients.forEach(ingredient => {
  let items = document.createElement('li');
  items.innerHTML = ingredient;
  list.append(items);

}) 