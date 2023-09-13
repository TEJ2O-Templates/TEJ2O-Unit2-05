"""
Created by: Mr. Coxall
Created on: Sep 2020
This module return percentage of light.
"""

from microbit import *


display.clear()
display.show(Image.HAPPY)

while True:
    if button_a.is_pressed():
        light_value = display.read_light_level()
        light_value_percentage = (light_value / 255) * 100
        display.show(str(random_number))
