# Engineering Team Profile Page Creator

## Description
A Node.js command-line application that takes in information about employees on a software engineering team, and generates an HTML webpage displaying summaries for each person.

## Links
Sample HTML in GitHub: https://github.com/urbanpatrol/employee-profile-generator/blob/main/output/team.html

## User Story
```
- AS A manager
- I WANT to generate a webpage that displays my team's basic info
- SO THAT I have quick access to their emails and GitHub profiles
```
## Acceptance Criteria

- Create a command-line application that accepts user input.
- A user is prompted for an employees information in creating an engineering team.
- When a user decides to finish building their team, they exit the application and the HTML is generated.

When a user enters those requirements, the user is presented with a menu with the option to:
- Add an engineer
- Add an intern
- Finish building the team

>Manager
- Name
- Employee ID
- Email address
- Office number

>Engineer
- Name
- ID
- Email
- GitHub username

>Intern
- Name
- ID
- Email
- School

## Usage
- Type in 'node index.js' to initiate the process.
- Follow the prompts in creating a Team.
- Once completed, a webpage with the Team info will be created in the output folder.

## Screenshots
Sample team screenshot
![](/assets/team-webpage-example.png)

## Technologies
- <p><a href="https://nodejs.org/">Node.js</a></p>
- <p><a href="https://www.npmjs.com/">NPM</a></p>
- <p><a href="https://www.npmjs.com/package/inquirer">Inquirer.js</a></p>
- <p><a href="https://www.npmjs.com/package/jest">Jest</a></p>

## Contributor
Ramon Fritz ©2023 All Rights Reserved.
- - -
