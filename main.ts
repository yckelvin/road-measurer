input.onButtonPressed(Button.A, function () {
    basic.showString("Your student no")
    basic.showString("==> ")
    basic.showNumber(Counter * 75)
})
input.onGesture(Gesture.LogoUp, function () {
    Counter += 1
})
input.onButtonPressed(Button.AB, function () {
    Counter = -1
    basic.clearScreen()
})
let Counter = 0
Counter = -1
basic.forever(function () {
    if (Counter >= 0) {
        basic.showNumber(Counter)
    }
})
