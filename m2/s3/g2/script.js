//! INPUT FIELD
const completeName = document.getElementById("input")

//! BUTTONS
const memorizeButton = document.getElementById("memorizeButton")
const deleteButton = document.getElementById("deleteButton")

//! TARGET
let target = document.getElementById("target")

//! NAMES ARRAY
let namesArray = []


//! MEMORIZE FUNCTION
memorizeButton.addEventListener("click", saveNames)

function saveNames(e){
    e.preventDefault();
    // STRINGIFY rende il tipo di dato una stringa
    // JSON è un metodo complesso delle local storge
    localStorage.setItem('Name:', JSON.stringify(namesArray));
    namesArray.push(completeName.value);
    localStorage.setItem('Name:', JSON.stringify(namesArray));
    target.textContent = namesArray[namesArray.length - 1];
    // RESET toglie visibilità
    document.querySelector('form').reset();
}

//! DELETE FUNCTION
deleteButton.addEventListener('click', cancelNames);

function cancelNames() {
    // PARSE riporta all'origine il tipo di dato
    let namesArray = JSON.parse(localStorage.getItem('Name:'));
    namesArray.pop();
    localStorage.setItem('Name:', JSON.stringify(namesArray));
    target.textContent = namesArray[namesArray.length - 1];
}

