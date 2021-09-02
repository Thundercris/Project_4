# General Assembly Project 4:  VIBES 

## Overview

VIBES is a Full-Stack web application to find places like pubs and restaurants. New users can register an account and share with the community their favourite spot.

## Timeframe

9 days

## Technologies Used

## Backend

* Python
* Django
* PostgreSQL
* Insomnia 
* Deployed through heroku

## Frontend

* JavaScript 
* React
* HTML
* CSS
* SASS
* Bootstrap
* Cloudinary 


## Navigate and Play a deployed version

* https://vibes-sei-project-04.herokuapp.com/

## Installation

* Navigate the deployed version online.
* Clone the repo, inside the virtual environment run the command ‘python manage.py runserver’ and cd client run ‘yarn start’.

## Application Overview

<img src="https://res.cloudinary.com/dbc3fejob/image/upload/v1629218786/Readme%20project%204/Screenshot_2021-08-17_at_17.45.35_cwjqxj.jpg">

## Brief

Solo project to realise a full stack web application using React, Python and Django.


## Approach

Initially I dedicated some time to planning and thinking about the architecture of the application. I wanted to make an app in order for the user to explore new places and once logged in being able to add their favorite spot and share this with the other users. 

I started to build the back-end and in order to have the functionality mentioned above I created: 
* The user model, with a view allowing only POST and GET requests to Register and Login.
* The place model, that contains all information I wanted to display for each spot.
* The category model allows the user to classify which type of spot is, for instance: a pub or restaurant or park, etc.
* The comment model gives to the user the option of leaving a comment. This is not implemented yet in the front-end but it's part of the future feature.
* Corresponding API views for the functionalities.

Below one of the models:

<img src="https://res.cloudinary.com/dbc3fejob/image/upload/v1629223935/Readme%20project%204/Screenshot_2021-08-17_at_18.48.51_zd9i8n.jpg">

The front-end side is built in React and on the main page, are displayed all places. On the navbar the user is able to login or register a new account and only after logging is able to add a new place.

<img src="https://res.cloudinary.com/dbc3fejob/image/upload/v1629229971/Readme%20project%204/Screenshot_2021-08-17_at_20.52.29_guq3n9.jpg">

## Challenges

The initial plan was to create a function to enable users to see and leave comments on the places, but due to the short time frame I was only able to implement this on the backend side. I have learned how to display this feature in the frontend so I will implement it later on.

## Wins

Considering that this was my first project using both Python and Django, I am happy with the results. I was definitely more confident and became quicker at styling, managing to have a responsive design and implementing a sticky Navbar which is something that I didn’t have time to do in my previous project.

## Key Learning/Takeaway

This was my first project using Python and Django to build the back-end. I definitely enjoyed exploring these technologies and I am looking forward to using them for my next project. In terms of front-end I feel that I have a strong understanding of React and I am now more confident and faster in finding solutions, learning and experimenting new functionality.

## Future features

* Add a personalized user profile page.
* Add the logo.
* Implement the comment section and the search engine to the frontend.
