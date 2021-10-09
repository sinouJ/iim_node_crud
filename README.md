# IIM Node CRUD
This is a todo application. REST api is made with express. Client is made with Vuejs 2

------------


## Summary

1. ## Installation
The application is initializable with docker or locally

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
3. ## Routes
4. ## Features
