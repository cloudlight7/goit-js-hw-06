const listWithId = document.querySelector('#categories');
let category;
let elements;
const menuItemsByTagName = listWithId.querySelectorAll("li.item > h2");
console.log(`Number of categories: ${menuItemsByTagName.length}`);


for (let i = 0; i < menuItemsByTagName.length; i += 1) {
    category = listWithId.children[i].querySelector('h2');
    elements = listWithId.children[i].querySelectorAll('ul > li');
    
    console.log(`Category: ${category.textContent}`);
    console.log(`Elements: ${elements.length}`);
}