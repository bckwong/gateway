# Init
radio.set_group(1)
radio.set_transmit_power(7)
 
# Event handler for incoming serial port data
def on_received_string(receivedString):
   serial.write_line(receivedString)
# Register the event handler
radio.on_received_string(on_received_string)
