const Employee = require("../Team_Profile_Generator/lib/Employee");
const Engineer = require("../Team_Profile_Generator/lib/Engineer");
const Intern = require("../Team_Profile_Generator/lib/Intern");
const Manager = require("../Team_Profile_Generator/lib/Manager");
const { prompt } = require("inquirer");
const fs = require("fs");
const { type } = require("os");

const employees = [];

// fs.writeFileSync()

const managerPrompts = [
	{
		message: "Please input dev team project/name",
		name: "teamName",
		type: "input",
		default: "Tim's Devs",
	},
	{
		message: "Please input the Manager's name:",
		name: "managerName",
		type: "input",
		default: "Tim",
	},
	{
		message: (answers) => `Please input ${answers.managerName}'s ID number:`,
		name: "managerId",
		type: "input",
		default: "01m",
	},
	{
		message: (answers) => `Please input ${answers.managerName}'s email:`,
		name: "managerEmail",
		type: "input",
		default: "tim@workplace.com",
	},
	{
		message: (answers) =>
			`Please input ${answers.managerName}'s office number:`,
		name: "managerOffice",
		type: "input",
		default: "1A",
	},
];

const employeePrompts = [
	{
		message: "Which kind of employee would you like to add?",
		name: "role",
		type: "list",
		choices: ["Engineer", "Intern"],
	},
	{
		message: (answers) => `Please input the ${answers.role}'s name:`,
		name: "name",
		type: "input",
		default: "Tim",
	},
	{
		message: (answers) => `Please input ${answers.name}'s ID number:`,
		name: "idNum",
		type: "input",
		default: "01e",
	},
	{
		message: (answers) => `Please input ${answers.name}'s email:`,
		name: "email",
		type: "input",
		default: "tim@workplace.com",
	},
	{
		message: (answers) => {
			if (answers.role === "Engineer")
				return `Please input ${answers.name}'s GitHub profile:`;
			return `What school did/does ${answers.name} attend?:`;
		},
		name: "other",
		type: "input",
		default: "School or Github",
	},
];

function handleHTML() {
	//
}

function addNewEE() {
	prompt({
		message: "Are there more member's on the team?",
		type: "list",
		name: "addEE",
		choices: [
			"Yes, I want to add more team members",
			"No, I would like to finish the list and export",
		],
	}).then((data) => {
		if (data.addEE === "Yes, I want to add more team members") {
			prompt(employeePrompts).then((data) => {
				if (data.role === "Engineer") {
					const emp = new Engineer(
						data.name,
						data.id,
						data.email,
						data.role,
						data.other
					);
					employees.push(emp);
				} else {
					const emp = new Intern(
						data.name,
						data.id,
						data.email,
						data.role,
						data.other
					);
					employees.push(emp);
				}
				console.log(`${data.role}, ${data.name} added to the team!`);
				addNewEE();
			});
		} else {
			console.log("making HTML");
			console.log(employees);
			handleHTML();
		}
	});
}

function init() {
	prompt(managerPrompts).then((data) => {
		const teamName = data.teamName;
		const manager = new Manager(
			data.managerName,
			data.managerId,
			data.managerEmail,
			"manager",
			data.managerOffice
		);
		employees.push(manager);
		addNewEE();
	});
}

init();
