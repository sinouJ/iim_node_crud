# IIM Node CRUD
This is a todo application. REST api is made with express. Client is made with Vuejs 2

## Summary
1. [Installation](#installation "Installation")
2. [Known bugs](#known-bugs "Known bugs")
2. [Routes](#routes "Routes")
2. [Features](#features "Features")


1. ## Installation
	1. ### Docker
		- `docker-compose up --build`
		- Access the application at the following url : [`http://localhost:8080`](http://localhost:8080 "`http://localhost:8080`")
	2. ### Run locally (not recommended)
		1. #### Required stack
			- Nodejs version : `14.18.0`
			- Nodemon : `npm i -g nodemon`
			- Sequelize CLI : `npm i -g sequelize-cli`
		2. #### Init api
			- into `back` folder, do : `npm i`
			- Edit the following configuration file to allow connection at your database : `back/config/config.json` (see [Sequelize configuration](https://sequelize.org/master/manual/migrations.html#configuration "Sequelize configuration"))
			- then `npm start`should do required migrations and launch api
		3. #### Init client
			- into `front` folder, do : `npm i`
			- then `npm run serve`
			- Access the application at the following url : [`http://localhost:8080`](http://localhost:8080 "`http://localhost:8080`")
2. ## Known bugs
	- [ ] Components doesn't re-render correctly when adding a task (bypass => refresh tab)
	- [ ] No error displayed for the user when he tries to access at a protected route and isn't authenticated
	- [ ] No UI interface available to change a task state (To do, doing, done)
	- [ ] No UI interface available to edit title or description task
	- [ ] No UI interface available to delete task
3. ## Routes
	1. ### User
		1. #### Create user
			- Route : `localhost:4443/api/user`
			- Method : `POST`
			- Body : 
				- email : `String` required
				- password : `String` required (password must contain between 6 and 20 characters and at least one numeric digit, one uppercase and one lowercase letter)
				- biography : `Text` optional
		2. #### Login
			- Route : 
			- Method : 
			- Body :
	2. ### Task
		1. Post task
		2. Get all tasks
4. ## Features
	- Create a user
	- Login a user
	- Add a task
	- Edit a user
	- 404 page if no URL matching
	- Logout a user
