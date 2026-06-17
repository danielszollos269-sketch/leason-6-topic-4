input.onButtonPressed(Button.A, function () {
    motor_on = true
    basic.showIcon(IconNames.Duck)
    serial.writeLine("START pressed | Motor ON")
})
input.onButtonPressed(Button.B, function () {
    motor_on = false
    basic.showIcon(IconNames.Butterfly)
    serial.writeLine("STOP pressed | Motor OFF")
})
let motor_on = false
serial.writeLine("I DONNO")
motor_on = false
basic.showIcon(IconNames.Silly)
basic.forever(function () {
    if (motor_on) {
        led.toggle(0, 0)
        basic.pause(500)
        serial.writeLine("MOTOR RUNNING")
        basic.pause(1500)
    } else {
        basic.pause(200)
    }
})
