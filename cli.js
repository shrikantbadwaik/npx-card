#!/usr/bin/env node

'use strict'

const boxen = require("boxen");
const chalk = require("chalk");
const inquirer = require("inquirer");
const clear = require("clear");
const open = require("open");
const fs = require('fs');
const request = require('request');
const path = require('path');
const ora = require('ora');
const cliSpinners = require('cli-spinners');
clear();

const prompt = inquirer.createPromptModule();

const questions = [
    {
        type: "list",
        name: "action",
        message: "What you want to do?",
        choices: [
            {
                name: `Send me an ${chalk.green.bold("email")}?`,
                value: () => {
                    open("mailto:shrikant.badwaik@gmail.com");
                    console.log("\nDone, see you soon at inbox.\n");
                }
            },
            {
                name: `Visit my ${chalk.magentaBright.bold("GitHub")}?`,
                value: () => {
                    open("https://github.com/shrikantbadwaik");
                    console.log("\nOpening GitHub profile...\n");
                }
            },
            {
                name: `Connect on ${chalk.blue.bold("LinkedIn")}?`,
                value: () => {
                    open('https://www.linkedin.com/in/shrikant-badwaik/');
                    console.log("\nOpening LinkedIn profile...\n");
                }
            },
            {
                name: "Just quit.",
                value: () => {
                    console.log("Hasta la vista.\n");
                }
            }
        ]
    }
];

const data = {
    name: chalk.bold.green("             Shrikant Badwaik"),
    handle: chalk.white("@shrikantbadwaik"),
    work: `${chalk.white("Software Engineer at")} ${chalk
        .hex("#00B14F")
        .bold("Grab Holdings Inc.")}`,
    twitter: chalk.gray("https://x.com/") + chalk.cyan("00shrikant00"),
    github: chalk.gray("https://github.com/") + chalk.green("shrikantbadwaik"),
    linkedin: chalk.gray("https://linkedin.com/in/") + chalk.blue("shrikant-badwaik"),
    npx: chalk.red("npx") + " " + chalk.white("shrikant"),

    labelWork: chalk.white.bold("       Work:"),
    labelTwitter: chalk.white.bold("    Twitter:"),
    labelGitHub: chalk.white.bold("     GitHub:"),
    labelLinkedIn: chalk.white.bold("   LinkedIn:"),
    labelEmail: chalk.white.bold("      Email:"),
    labelCard: chalk.white.bold("       Card:")
};

const me = boxen(
    [
        `${data.name}`,
        ``,
        `${data.labelWork}  ${data.work}`,
        ``,
        `${data.labelTwitter}  ${data.twitter}`,
        `${data.labelGitHub}  ${data.github}`,
        `${data.labelLinkedIn}  ${data.linkedin}`,
        `${data.labelEmail}  ${data.email}`,
        ``,
        `${data.labelCard}  ${data.npx}`,
        ``,
        `${chalk.italic(
            "Jetpack-ing my way through Android stories..."
        )}`,
        `${chalk.italic("one screen at a time.")}`,
        ``,
        `${chalk.italic(
            "Feel free to reach out - my inbox is always open!"
        )}`
    ].join("\n"),
    {
        margin: 1,
        float: 'center',
        padding: 1,
        borderStyle: "single",
        borderColor: "green"
    }
);

console.log(me);
const tip = [
    `Tip: Try ${chalk.cyanBright.bold(
        "cmd/ctrl + click"
    )} on the links above`,
    '',
].join("\n");
console.log(tip);

prompt(questions).then(answer => answer.action());