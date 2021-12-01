radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 5) {
        music.ringTone(988)
        basic.showString("LOCKER BREAK IN!")
    }
})
input.onButtonPressed(Button.A, function () {
    music.stopMelody(MelodyStopOptions.All)
})
basic.forever(function () {
    radio.setGroup(0)
})
