const Employee = require("../Team_Profile_Generator/lib/Employee");
const Engineer = require("../Team_Profile_Generator/lib/Engineer");
const Intern = require("../Team_Profile_Generator/lib/Intern");
const Manager = require("../Team_Profile_Generator/lib/Manager");
const { prompt } = require("inquirer");
const fs = require("fs");
const { type } = require("os");

const employees = [];

const managerPrompts = [
	{
		message: "Please input the Manager's name:",
		name: "name",
		type: "input",
		default: "Tim",
	},
	{
		message: (answers) => `Please input ${answers.name}'s ID number:`,
		name: "idNum",
		type: "input",
		default: "01m",
	},
	{
		message: (answers) => `Please input ${answers.name}'s email:`,
		name: "email",
		type: "input",
		default: "tim@workplace.com",
	},
	{
		message: (answers) => `Please input ${answers.name}'s office number:`,
		name: "other",
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

function handleHTML(data) {
	const teamName = data.teamNameInput;

	const html = `<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/4.6.1/css/bootstrap-grid.min.css"
	integrity="sha512-Xj2sd25G+JgJYwo0cvlGWXoUekbLg5WvW+VbItCMdXrDoZRWcS/d40ieFHu77vP0dF5PK+cX6TIp+DsPfZomhw=="
	crossorigin="anonymous" referrerpolicy="no-referrer" />
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
		integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
	<script src="https://kit.fontawesome.com/23106110f2.js" crossorigin="anonymous"></script>
	<title>${teamName} Page</title>
	<link rel="icon" type="image/x-icon" href="../assets/img/909337.png">
</head>
<body>
	<style>
		*{
			margin: 0;
			padding: 0;
			font-family: sans-serif;
		}
		header{
			background-color: rgb(236, 198, 73);
			height: 3rem;
			color: rgb(1, 25, 92);
			font-weight: bold;
		}
		main{
			background-color: rgb(1, 25, 92);
			height: 100vh;
			padding: 5%;
			margin: 0;
		}
		ul{
			list-style: none;
		}
		a {
			text-decoration: none;
		}
		.card {
			padding: 1%;
			color: black;
			background-color: rgb(236, 198, 73);
			border-radius: 8px;
			margin: 2%;
		}
		.card-header{
			font-weight: bolder;
			font-size: 1.25rem;
			color: rgb(236, 198, 73);
			background-color:  rgb(1, 25, 92);
		}
		.list-group-item{
			color: aliceblue;
			background-color: rgb(51, 0, 0);
			margin: .25%;
		}
	</style>
	<header class="container-fluid ">
		<h1 class="d-flex justify-content-center">${teamName}</h1>
	</header>
	<main class="container-fluid" >
		<section class="row justify-content-center justify-content-evenly" id="cardHolder">
		${employees
			.map((employee) =>
				employee.generateHTMLCard(
					employee.officeNumber || employee.github || employee.school
				)
			)
			.join("\n")}
		</section>
	</main>
</body>
<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/4.6.1/js/bootstrap.min.js"
	integrity="sha512-UR25UO94eTnCVwjbXozyeVd6ZqpaAE9naiEUBK/A+QDbfSTQFhPGj5lOR6d8tsgbBk84Ggb5A3EkjsOgPRPcKA=="
	crossorigin="anonymous" referrerpolicy="no-referrer"></script>

</html>
`;

	fs.writeFileSync(`./dist/${teamName.split(" ").join("")}.html`, html);
	console.log("Team HTML page created, please check ./dist folder.");
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
						`ID #: ${data.idNum}`,
						`Email: ${data.email}`,
						`${data.role}`,
						`GitHub: ${data.other}`
					);
					employees.push(emp);
				} else {
					const emp = new Intern(
						data.name,
						`ID #: ${data.idNum}`,
						`Email: ${data.email}`,
						`${data.role}`,
						`School: ${data.other}`
					);
					employees.push(emp);
				}
				console.log(`${data.role}, ${data.name} added to the team!`);
				addNewEE();
			});
		} else {
			prompt({
				message: "Please input dev team project/name",
				name: "teamNameInput",
				type: "input",
				default: "Project Team",
			}).then((data) => {
				console.log(employees);
				handleHTML(data);
			});
		}
	});
}

function init() {
	prompt(managerPrompts).then((data) => {
		const manager = new Manager(
			data.name,
			`ID #: ${data.idNum}`,
			`Email: ${data.email}`,
			`${data.role}`,
			`Office #: ${data.other}`
		);
		employees.push(manager);
		addNewEE();
	});
}

init();
