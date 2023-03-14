# employee-creator

## Overview:
The project involves developing a full stack app that allows users to create, view, modify, and delete employee records. The frontend of the app is developed in ReactJS using TypeScript and SCSS, while the backend is developed in Java using the Spring framework. The app is designed to be RESTful, allowing for seamless communication between the frontend and backend.

### Tech Stacks & Libraries:

    ReactJS: for a responsive and modular frontend design.
    TypeScript: for type-safe coding and compile-time checks.
    SCSS: for modularized and nested styling code.
    Java/Spring: for building, testing, and deploying backend applications.

### MVP:
The app's MVP consists of a web application with a RESTful API and a React frontend that allows users to create, view, modify, and delete employee records. The schema for employee records is flexible and left to the developer's discretion.

## To run app
1) Initialise Mysql database of name `employee_creator`
```
CREATE DATABASE employee_creator
```
2) Set up and run Spring APi in ` employee-creator/spring-backend/src/main/resources/application.properties` using an IDE of your choice
```
spring.datasource.url=jdbc:mysql://localhost:3306/employee_creator
spring.datasource.username=root
spring.datasource.password=<YOUR_ROOT_PASSWORD>
spring.jpa.hibernate.ddl-auto=update
spring.jpa.generate-ddl=true
```
3) Run Frontend React application, from the root folder of this repo run the following commands:
```
cd react-frontend
npm install
npm run dev
```
You app should now be connection and running 

*Currently working on a Dockerize container to simplify the process*
