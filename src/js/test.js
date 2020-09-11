
let clicked = false
let amount = 0
let red = false
const clicker = function() {
    document.addEventListener('click', function () {
        clicked = true
        console.log('working', clicked)

        amount = amount + 1

        if (amount == 10) {
            console.log('WINNER')
            amount = 0
        }

    })
}
clicker()

// export { clicked, click }