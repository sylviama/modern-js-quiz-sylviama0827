# Modern JavaScript Developer Quiz
# Robot Battledome

<img width="1165" alt="shot3" src="https://cloud.githubusercontent.com/assets/16583776/15102139/7732ee90-1561-11e6-8b98-588be9732904.png">

<img width="1193" alt="shot2" src="https://cloud.githubusercontent.com/assets/16583776/15101693/893cbb1c-155b-11e6-8310-dcb9f57eacce.png">



## Setup

1. `cd` to your quizzes directory.
1. Clone this repository and `cd` into the directory it creates.
1. Now run the following commands.

    ```bash
    git checkout -b quiz
    touch index.html
    touch quiz.js
    touch quiz.css
    ```

You are now ready to work in the `quiz` branch.

When your work in complete, push up the branch (`git push origin quiz`) and submit the pull request on Github.

## Instructions

### Basic Requirements

1. Use ES6 language features wherever you can. At a minimum, you should be using **let**, **const**, fat arrows, property shorthand, method properties, and string templates.
1. Have a Gulp task running at all times to validate your JavaScript. We will be validating your project and we should see 0 errors.
1. You must have a test suite that validates the core logic of the application.
1. You must use jQuery for interacting with the DOM.

### Logical Requirements

You'll be building robots to battle each other.

1. A base Robot function.
1. Define three robot type functions (e.g. Drone, Bipedal, ATV).
1. Define at least 2 specific robot model functions for each type.
1. Give each robot model a different range of health. For example, one model can have health range of 50-80, and another one will have a range of 60-120. To accomplish this, read about the [Math.random()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) function in JavaScript.
1. Define at least six different modifications and six different weapons that can be added to a robot.
1. Each modification should provide some combination of the following benefits - increased protection, increased damage, or evasion capability (ability to avoid some attacks).
1. Define the range of damage that each weapon can do. 

### Functional Requirements

1. When your user interface first loads, provide the user with buttons so that one specific robot model can be chosen as Player 1.
1. Once the user selects a robot model for Player 1, show a button for each weapon that can be added to the robot.
1. Once the user selects a weapon for Player 1, show a button for each modification that can be added to the robot.
1. Once Player 1 has a modification, provide the user with buttons so that one specific robot model can be chosen as Player 2.
1. Once the user selects a robot model for Player 2, show a button for each weapon that can be added to the robot.
1. Once the user selects a weapon for Player 2, show a button for each modification that can be added to the robot.
1. Once the modification for Player 2 is chosen, the battle begins.
1. Each round of battle should determine the amount of damage each robot will do with its weapon.
1. That damage should then be adjusted based on the modifications that it has, and what its opponent has.
1. Rounds continue until one of the robots has 0, or less than 0, health.
1. When the battle is over display the outcome to the user. For example...

##### The Viper Drone defeated the Behemoth ATV with its flamethrower.

















