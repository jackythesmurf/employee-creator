# employee-creator

## Overview:
The project involves developing a full stack app that allows users to create, view, modify, and delete employee records. The frontend of the app is developed in ReactJS using TypeScript and SCSS, while the backend is developed in Java using the Spring framework. The app is designed to be RESTful, allowing for seamless communication between the frontend and backend.

### Tech Stacks & Libraries:

   - ReactJS: for a responsive and modular frontend design.
   - TypeScript: for type-safe coding and compile-time checks.
   - SCSS: for modularized and nested styling code.
   - Spring: for building, testing, and deploying backend RESTful applicatioins.
   - Mysql: for its reliability, scalability, and ease of use being a relational database management system.


### MVP:
The app's MVP consists of a web application with a RESTful API and a React frontend that allows users to create, view, modify, and delete employee records. 

## To run app
1) Initialise Mysql database of name `employee_creator`
```
CREATE DATABASE employee_creator
```
2) Set up the Spring API in ` employee-creator/spring-backend/src/main/resources/application.properties`
```
spring.datasource.url=jdbc:mysql://localhost:3306/employee_creator
spring.datasource.username=root
spring.datasource.password=<YOUR_ROOT_PASSWORD>
spring.jpa.hibernate.ddl-auto=update
spring.jpa.generate-ddl=true
```
3) run the Spring API using an IDE of your choice
4) Run the Frontend React application, by executing the following commands from the root folder of this repo:
```
cd react-frontend
npm install
npm run dev
```
You app should now be connected and running 

*Currently working on a Dockerize container to simplify the process*
