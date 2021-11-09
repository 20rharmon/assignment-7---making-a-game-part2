let score = 0
input.onButtonPressed(Button.A, function () {
    score += -1
})
input.onButtonPressed(Button.B, function () {
    score += 1
})
basic.forever(function () {
    basic.showNumber(score)
    if (score < 0) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
    }
    if (score > 0) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    }
})
