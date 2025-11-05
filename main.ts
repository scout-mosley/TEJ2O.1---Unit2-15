/* Copyright (c) 205 MTHS All rights reserved
 *
 * Created by: Scout Mosley
 * Created on: Oct 2025
 * This program uses nested loops for Leds.
*/

// setup
basic.clearScreen()
let insideLoop = 4
let counter = 4
led.plot(0, 0)

// does nested loop
input.onButtonPressed(Button.A, function () { 
    while (counter > 0) {
        while (insideLoop > 0) {
        insideLoop = insideLoop -1
        
        }
     }


 })