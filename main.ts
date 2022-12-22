input.onButtonPressed(Button.A, function () {
    if (x > 0) {
        basic.showString("A")
    }
    if (x < 5) {
        basic.showString("B")
    }
    if (x >= 15) {
        basic.showString("C")
    }
    basic.showString("D")
})
input.onButtonPressed(Button.AB, function () {
    if (x < 0) {
        basic.showString("A")
        if (x > -5) {
            basic.showString("B")
        }
    } else if (x < 5) {
        basic.showString("C")
    } else {
        basic.showString("D")
    }
})
input.onButtonPressed(Button.B, function () {
    if (x <= 0) {
        basic.showString("A")
    } else if (x > 2) {
        basic.showString("B")
    } else if (x < 9) {
        basic.showString("C")
    } else {
        basic.showString("D")
    }
})
let x = 0
x = -6
