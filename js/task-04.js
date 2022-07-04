const addListenerBtn = document.querySelector('[data-action="increment"]');
const removeListenerBtn = document.querySelector('[data-action="decrement"]');
const value = document.querySelector("#value");

let counterValue = 0;
addListenerBtn.addEventListener("click", () => {
    counterValue += 1;
    value.innerHTML = `${counterValue}`;
});     
removeListenerBtn.addEventListener("click", () => {
    counterValue -= 1;
    value.innerHTML = `${counterValue}`;
});   