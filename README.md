# sine problem

While coding in processing on the phone I wrote a simple program to

explore what I thought looked like  the mathematical land of insect wings and fish scales, with a window made of a scrolling grid of integers. The sine of those integers cubed is mapped to a number from 0 to 255. this result is used as a color mapping and this wavy world appears. here I am scrolling from about 18,000 to about 45,000. coded in processing on an Android phone.

however this world is just an artifact of how processing handles the sine of large numbers 

I checked in javascript and python and processing gave me a different answer.

Python

>>> math.sin(math.radians(404800**3))

-0.9910302085400828


p5js javascript

-0.9910302085400828

processing:

66331758592000000 404800 -0.22154574


So a standard p5 version is very boring

I then tried to recreate some of the shapes that I saw in processing 

I was able to with a function that sums the digits of the cell and returns the average

then I multiply that by the original cell number and take the sine

processing must be doing some averaging 


see on instagram here

https://www.instagram.com/p/Cx7kuJHt7c-/

live p5 version

https://greggelong.github.io/sineProblem/sineProbP5/

move the mouse top to bottom to change the warp

move the mouse left to right to change the cell size

