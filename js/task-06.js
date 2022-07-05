const refs = {
    textInput: document.querySelector("#validation-input"),
    inputLenght: document.querySelector("[data-length]")
}
refs.textInput.addEventListener('input', onInputChange);
let lengthValue = 0;
function onInputChange(event) {
    lengthValue = event.currentTarget.value.length;
};

refs.textInput.addEventListener("blur", () => {
    if (lengthValue === Number(refs.inputLenght.dataset.length)) {
        refs.textInput.classList.add("valid");
        refs.textInput.classList.remove('invalid');
    }else{
        refs.textInput.classList.add("invalid");
    refs.textInput.classList.remove('valid');}
});
