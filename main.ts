#! usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";

// Define the Player class
class Player {
    name: string;
    fuel: number = 100;

    constructor(name: string) {
        this.name = name;
    }

    // Decrease fuel method for Player
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel < 0 ? 0 : fuel; // Ensure fuel doesn't go below 0
    }

    // Increase fuel method for Player
    fuelIncrease() {
        this.fuel = 100;
    }
}

// Define the Opponent class
class Opponent {
    name: string;
    fuel: number = 100;

    constructor(name: string) {
        this.name = name;
    }

    // Decrease fuel method for Opponent
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel < 0 ? 0 : fuel; // Ensure fuel doesn't go below 0
    }

    // Increase fuel method for Opponent
    fuelIncrease() {
        this.fuel = 100;
    }
}

// Gather player's name and opponent selection
let player = await inquirer.prompt({
    type: "input",
    name: "name",
    message: "Please Enter Your Name:"
});

let opponent = await inquirer.prompt({
    type: "list",
    name: "select",
    message: "Select your opponent",
    choices: ["Skeleton", "Assassin", "Zombie"]
});

// Instantiate Player and Opponent objects
let p1 = new Player(player.name);
let o1 = new Opponent(opponent.select);

// Start the game loop
do {
    // Check the opponent selected by the player
    if (opponent.select == "Skeleton") {
        console.log(`${chalk.bold.green(p1.name)} VS ${chalk.bold.red(o1.name)}`);

        // Prompt the player to choose an action
        let ask = await inquirer.prompt({
            type: "list",
            name: "option",
            message: "Select your action",
            choices: ["Attack", "Drink Portion", "Run For Your Life.."]
        });

        // Player chooses to Attack
        if (ask.option == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                // Player's fuel decreases
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("You Lose, Better Luck Next Time"));
                    process.exit();
                }
            } else {
                // Opponent's fuel decreases
                o1.fuelDecrease();
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.green.bold.italic("You Win!"));
                }
            }
        }

        // Player chooses to Drink Portion
        if (ask.option == "Drink Portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.green(`You Drink a Health Portion. Your Fuel is ${p1.fuel}`));
        }

        // Player chooses to Run For Their Life
        if (ask.option == "Run For Your Life..") {
            console.log(chalk.red.bold.italic("You Lose, Better Luck Next Time"));
            process.exit();
        }
    }// Check the opponent selected by the player
    if (opponent.select == "Assassin") {
        console.log(`${chalk.bold.green(p1.name)} VS ${chalk.bold.red(o1.name)}`);

        // Prompt the player to choose an action
        let ask = await inquirer.prompt({
            type: "list",
            name: "option",
            message: "Select your action",
            choices: ["Attack", "Drink Portion", "Run For Your Life.."]
        });

        // Player chooses to Attack
        if (ask.option == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                // Player's fuel decreases
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("You Lose, Better Luck Next Time"));
                    process.exit();
                }
            } else {
                // Opponent's fuel decreases
                o1.fuelDecrease();
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.green.bold.italic("You Win!"));
                }
            }
        }

        // Player chooses to Drink Portion
        if (ask.option == "Drink Portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.green(`You Drink a Health Portion. Your Fuel is ${p1.fuel}`));
        }

        // Player chooses to Run For Their Life
        if (ask.option == "Run For Your Life..") {
            console.log(chalk.red.bold.italic("You Lose, Better Luck Next Time"));
            process.exit();
        }
    }// Check the opponent selected by the player
    if (opponent.select == "Zombie") {
        console.log(`${chalk.bold.green(p1.name)} VS ${chalk.bold.red(o1.name)}`);

        // Prompt the player to choose an action
        let ask = await inquirer.prompt({
            type: "list",
            name: "option",
            message: "Select your action",
            choices: ["Attack", "Drink Portion", "Run For Your Life.."]
        });

        // Player chooses to Attack
        if (ask.option == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                // Player's fuel decreases
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("You Lose, Better Luck Next Time"));
                    process.exit();
                }
            } else {
                // Opponent's fuel decreases
                o1.fuelDecrease();
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.green.bold.italic("You Win!"));
                }
            }
        }

        // Player chooses to Drink Portion
        if (ask.option == "Drink Portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.green(`You Drink a Health Portion. Your Fuel is ${p1.fuel}`));
        }

        // Player chooses to Run For Their Life
        if (ask.option == "Run For Your Life..") {
            console.log(chalk.red.bold.italic("You Lose, Better Luck Next Time"));
            process.exit();
        }
    }
} while (true); // Infinite loop to keep the game running
