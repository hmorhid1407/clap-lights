input.onSound(DetectedSound.Loud, function () {
    lucesencendidas = !(lucesencendidas)
    if (lucesencendidas) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else {
        basic.clearScreen()
    }
})
let lucesencendidas = false
input.setSoundThreshold(SoundThreshold.Loud, 128)
