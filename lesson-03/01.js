const colors = ["синий", "черный", "зеленый", "красный", "желтый", "зеленый"];

function createColorString(arr) {
    return arr.filter((elem) => elem === 'черный' || elem === 'красный' || elem === 'желтый').join('-')
}

