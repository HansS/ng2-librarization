# A simple seed for ng2 libraries

This is a simple starter-kit to create your own external 3rd party library.
It's useful to separte code you will need across multiple apps.

## How to get started?
* Clone or download this repo
* Modify the file package.json according to your needs
* Under `src` create all the modules/components/... you need
* Re-export them in `index.ts` for easier access


## Installation with Angular CLI
If you're trying this out locally the easiest way is to link your library locally.
To do so, inside a terminal/cmd, go to the root folder of your library and type `npm link`.
Now over at your apps root folder just install it with `npm link name-of-your-library`.

If you've published your library already to npm's registry, you should be fine with simply running:
`npm install --save name-of-your-library`. 

## Unit Testing
In order to run unit-tests create those in feature-oriented style next to the to be tested items inside
the `src` folder. Make sure the files end with `*.spec.ts`.

To run the unit tests run:
`npm test`
