radio.onReceivedValue(function (name, value) {
    serial.writeValue(name, value)
})
serial.writeString("gateway ON")
serial.writeLine("")
// Init
radio.setGroup(1)
radio.setTransmitPower(7)
radio.setFrequencyBand(7)
