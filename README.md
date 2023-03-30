# Employee Creator full-stack application
<img width="250" src="https://github.com/jackythesmurf/employee-creator/actions/workflows/main.yml/badge.svg"/> <img width="250" src="https://github.com/jackythesmurf/employee-creator/actions/workflows/spring_test.yml/badge.svg"/>

## Overview:
The project involves developing a full stack app that allows users to create, view, modify, and delete employee records. The frontend of the app is developed in ReactJS using TypeScript and SCSS, while the backend is developed in Java using the Spring framework. The app is designed to be RESTful, allowing for seamless communication between the frontend and backend.

## To run app
<B>Note:</b> I have dockerized this project, if you install docker and compose it, it can run on your machine without extra configs or installations

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


### Tech Stacks & Libraries:

   - ReactJS: for a responsive and modular frontend design.
   - TypeScript: for type-safe coding and compile-time checks.
   - SCSS: for modularized and nested styling code.
   - Spring: for building, testing, and deploying backend RESTful applicatioins.
   - Mysql: for its reliability, scalability, and ease of use being a relational database management system.
   - React Hook Forms: for efficient management of error messages and streamline the form submission process. This not only enhanced the user experience but also improved the overall functionality of the application.
   - Vitest & Sping test: for testing both the frontend and backend components of the React TypeScript and Spring project, ensuring good standard quality and reliability of application.
   - Github Workflow actions: for continuous integration to automate software workflows by running tests on every code change.
   - Dockerfile: for consistent and isolated environment for the application to run in, making it easier to deploy the application across multiple platforms and ensure that it runs reliably in different environments.
   
   
### MVP:
The app's MVP consists of a web application with a RESTful API and a React frontend that allows users to create, view, modify, and delete employee records. 

## The challenges faced, and what I learnt
Throughout the process of building my full-stack application, I gained a comprehensive understanding of how to seamlessly integrate Restful APIs with frontend projects. This project served as a valuable learning experience for industry-standard development practices and concepts, including Continuous Integration/Continuous Deployment (CI/CD) with GitHub Workflow Actions and Docker. By using GitHub Workflow Actions, I automated testing, and saved time by eliminating the need for manual testing. Docker facilitated seamless deployment across all devices, allowing the web application to run seamlessly across multiple devices.

Despite the progress, I am currently facing the challenge of learning how to deploy and host my web application. However, I am determined to overcome this challenge by exploring tools such as AWS and Azure, enabling me to enhance my knowledge of cloud deployment and hosting. I am confident that by taking on this challenge, I will further expand my skillset and be better equipped to develop future projects.

## Design Approach
This project implements the Model-View-Controller (MVC) pattern to structure both the frontend and backend components of the application.

The frontend, developed with React and TypeScript, follows the view component of the MVC pattern, responsible for handling user interaction, and input error messages. Meanwhile, the backend, developed with Spring, implements the model and controller components. The model component manages data and business logic, while the controller component handles data from the frontend and facilitates interaction between the model and view with its endpoints for editing, deleting and getting employees.

The application's use of the MVC pattern facilitates a structured approach to code organization and maintenance, allowing for improved maintainability of the application. Separation of concerns is also achieved, enabling the modification and maintenance of different components of the application independently.

## Features
* Edit existing employee data
* Create new employee
* Delete employee from database
* Live form validation and error messages with React Hook forms





