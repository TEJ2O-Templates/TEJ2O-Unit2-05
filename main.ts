/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Mr. Coxall
 * Created on: Sep 2020
 * This program return percentage of light
*/

// our variable for a random number
let lightValue: number
let lightValuePercentage: number

basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
  // get light value
  lightValue = input.lightLevel()
  lightValuePercentage = (lightValue / 255) * 100
  lightValuePercentage = Math.round(lightValuePercentage)
  
  // output answer
  basic.clearScreen()
  basic.showString('Percentage light is: ' + lightValuePercentage.toString() + '%.')
})
