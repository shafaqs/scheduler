# Interview Scheduler
## About
Interview Scheduler is an application that enables users to schedule technical interviews. Developed with React, the front-end interfaces with a database through Axios to facilitate fetching and storage of appointment data. To ensure the application's robustness, it has undergone testing via Storybook, Jest, and Cypress. It is essential to note that this project was created during my training with Lighthouse Labs and is not meant for production use.

## ScreenShots

Book an Appointment<img width="1212" alt="book appointment " src="https://user-images.githubusercontent.com/14892277/221438775-4dc276ed-fa27-4999-a243-7be46c1a3420.png">

Interview selector <img width="1511" alt="Interview-selector" src="https://user-images.githubusercontent.com/14892277/221438938-f6cfc206-2a41-40c9-b3ae-0aedb2cc137c.png">

Confirm before making changes <img width="1512" alt="confir-popup" src="https://user-images.githubusercontent.com/14892277/221439010-16ae5b85-b507-4329-af88-e0041551bb58.png">

Asynchronous display <img width="1512" alt="Delete-confirm" src="https://user-images.githubusercontent.com/14892277/221438974-cb93bf5b-d93b-40ae-b69b-ffcd52745a7e.png">


## Setup

Install dependencies with `npm install` 

## Running Webpack Development Server

```sh
npm start
```

## Running storybook Test Framework

```sh
npm test
```
##API server & Database Setup

For full functionality both must run concurrently: the client and the API server applications.

Start by forking and cloning the scheduler-api server [here](https://github.com/shafaqs/scheduler-api)
Follow the steps outlined in README to install and setup the database
Fork and clone this repo
Navigate to the root directory and install dependencies with npm install
Once you have the database setup and the scheduler-api server running, run the following command from the root directory of the project npm start
