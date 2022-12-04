const container = document.querySelector('.container');
const button = document.querySelector('.numberInput');

let number = 16

button.addEventListener('click', () => {
    let numberInput = prompt('Grid number (under 100)')
    if (isNaN(numberInput)) {
        alert(`${numberInput} is not a number!`)
        prompt('Grid number')
    } else if (numberInput > 100) {
        alert(`${numberInput} is bigger than 100!`)
        prompt('Grid number')
    } else if (numberInput < 100) {
        let number = numberInput
        div.remove()
        createGrid(number)

    }
})

function createGrid(number) {
    // Add 16 divs
    for (let i = 0; i < Math.pow(number, 2); i++) {
        const div = document.createElement('div');
        container.appendChild(div);

        function red() {
            div.setAttribute("style", "background-color:red;")
        }

        function grey() {
            div.setAttribute("style", "background-color:grey;")
        }

        div.addEventListener("mouseover", red, false);
        div.addEventListener("mouseout", grey, false);
    }
}

createGrid(number)
