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
let sprite = game.createSprite(0, 0)

// does nested loop
input.onButtonPressed(Button.A, function () { 
    while (counter > 0) {
        while (insideLoop > 0) {
        insideLoop = insideLoop -1
        sprite.move(1) 
        basic.pause(500)

        }
        insideLoop = insideLoop +4
        counter = counter -1
        sprite.turn(Direction.Right, 90)
     }

 })
 