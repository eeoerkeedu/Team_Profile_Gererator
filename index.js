const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const Manager = require("../lib/Manager");
const inquirer = require("inquirer");
const fs = require("node:fs");
const employees = [];

// init
// inquirer questions to fill in the employee data
// choice of role change
// add changed role to the employee
// fs.writeFileSync()

const managerPrompt = [
	{
		message: "mgr name",
		name: "managername",
		type: "input",
	},
	{
		message: "mgr id",
		name: "manageridNum",
		type: "input",
	},
	{
		message: "mgr email",
		name: "managerEmail",
		type: "input",
	},
	{
		message: "mgr office",
		name: "managerOffice",
		type: "input",
	},
];

function main() {
	prompt(managerPrompt).then((data) => {
		console.log(data);
		const manager = new Manager(
			data.managerName,
			data.manageridNum,
			data.managerEmail,
			data.managerOffice
		);
	});
}
