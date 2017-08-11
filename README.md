# ARLED - Arwen's and Robert's LED controller

The color picker comes from http://jscolor.com/

The range slider comes from https://jqueryui.com/slider/

## Art-net LED strip modes

The LED strip is controlled by a Wemos D1 mini, which contains an ESP-8266 module. The firmware is available from https://github.com/robertoostenveld/arduino/tree/master/esp8266_artnet_neopixel

This application is for RGB LED strips only, i.e. it does not support RGBW strips that include a white LED.

### mode 0: individual pixel control
  channel 1 = pixel 1 red
  channel 2 = pixel 1 green
  channel 3 = pixel 1 blue
  channel 5 = pixel 2 red
  etc.

### mode 1: single uniform color
  channel 1 = red
  channel 2 = green
  channel 3 = blue
  channel 5 = intensity (this allows scaling a preset RGBW color with a single channel)

### mode 2: two color mixing
  channel 1  = color 1 red
  channel 2  = color 1 green
  channel 3  = color 1 blue
  channel 5  = color 2 red
  channel 6  = color 2 green
  channel 7  = color 2 blue
  channel 9  = intensity (this also allows to black out the colors)
  channel 10 = balance (between color 1 and color2)

### mode 3: single uniform color, blinking between the color and black
  channel 1 = red
  channel 2 = green
  channel 3 = blue
  channel 5 = intensity
  channel 6 = speed (number of flashes per unit of time)
  channel 7 = ramp (whether there is a abrupt or more smooth transition)
  channel 8 = duty cycle (the time ratio between the color and black)

### mode 4: uniform color, blinking between color 1 and color 2
  channel 1  = color 1 red
  channel 2  = color 1 green
  channel 3  = color 1 blue
  channel 5  = color 2 red
  channel 6  = color 2 green
  channel 7  = color 2 blue
  channel 9  = intensity
  channel 10 = speed
  channel 11 = ramp
  channel 12 = duty cycle

### mode 5: single color slider, segment that can be moved along the array (between the edges)
  channel 1 = red
  channel 2 = green
  channel 3 = blue
  channel 5 = intensity
  channel 6 = position (from 0-255 or 0-360 degrees, relative to the length of the array)
  channel 7 = width    (from 0-255 or 0-360 degrees, relative to the length of the array)

### mode 6: dual color slider, segment can be moved along the array (between the edges)
  channel 1  = color 1 red
  channel 2  = color 1 green
  channel 3  = color 1 blue
  channel 5  = color 2 red
  channel 6  = color 2 green
  channel 7  = color 2 blue
  channel 9  = intensity
  channel 10 = position (from 0-255 or 0-360 degrees, relative to the length of the array)
  channel 11 = width    (from 0-255 or 0-360 degrees, relative to the length of the array)

### mode 7: single color smooth slider, segment can be moved along the array (continuous over the edge)
  channel 1 = red
  channel 2 = green
  channel 3 = blue
  channel 5 = intensity
  channel 6 = position (from 0-255 or 0-360 degrees, relative to the length of the array)
  channel 7 = width    (from 0-255 or 0-360 degrees, relative to the length of the array)
  channel 8 = ramp     (from 0-255 or 0-360 degrees, relative to the length of the array)

### mode 8: dual color smooth slider, segment can be moved along the array (continuous over the edge)
  channel 1  = color 1 red
  channel 2  = color 1 green
  channel 3  = color 1 blue
  channel 5  = color 2 red
  channel 6  = color 2 green
  channel 7  = color 2 blue
  channel 9  = intensity
  channel 10 = position (from 0-255 or 0-360 degrees, relative to the length of the array)
  channel 11 = width    (from 0-255 or 0-360 degrees, relative to the length of the array)
  channel 12 = ramp     (from 0-255 or 0-360 degrees, relative to the length of the array)

### mode 9: spinning color wheel
  channel 1 = red
  channel 2 = green
  channel 3 = blue
  channel 5 = intensity
  channel 6 = speed
  channel 7 = width
  channel 8 = ramp

### mode 10: spinning color wheel with color background
  channel 1  = color 1 red
  channel 2  = color 1 green
  channel 3  = color 1 blue
  channel 5  = color 2 red
  channel 6  = color 2 green
  channel 7  = color 2 blue
  channel 9  = intensity
  channel 10 = speed
  channel 11 = width
  channel 12 = ramp

### mode 11: rainbow slider
  channel 1 = saturation
  channel 2 = value
  channel 3 = position

### mode 12: rainbow spinner
  channel 1 = saturation
  channel 2 = value
  channel 3 = speed
