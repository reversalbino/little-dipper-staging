# Little Dipper

<!-- # <img src="/public/static/images/logo.jpg" alt="profile page for logged-in user wireframe" style="width:50px;"/>   MoOA - *Museum of Online Art*  -->


<!-- ## Table of Contents
  - [Description](#description)
  - [Index](#index)
  - [Link to live site](#link-to-live-site)
  - [Technologies](#technologies)
  - [Getting Started](#getting-started)
  - [Demo](#demo)
 -->
 
## Link to live site

Hosted on Heroku: [Little Dipper](https://little-dipper.herokuapp.com/)

## Description

Little Dipper is a platform where users can share and comment on images. Little Dipper is clone of flickr.

## Index
| [Features List](https://github.com/reversalbino/aa-little-dipper/wiki/Features) | [Database Schema](https://github.com/reversalbino/aa-little-dipper/wiki/DB-Schema) | [User Stories](https://github.com/reversalbino/aa-little-dipper/wiki/User-Stories) | [Wireframes](https://github.com/reversalbino/aa-little-dipper/wiki/Wireframes) |




## Technologies

Little Dipper was built using the following technologies:
<br>
<br>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" style="width:60px;" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" style="width:60px;" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" style="width:60px;" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" style="width:60px;" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" style="width:60px;" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlalchemy/sqlalchemy-original.svg" style="width:60px;" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" style="width:60px;" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg" style="width:60px;" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg" style="width:60px;" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" style="width:60px;" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg" style="width:60px;" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain-wordmark.svg" style="width:60px;" />



## Getting Started
To see Little Dipper live, please click the link provided above.
To run Little Dipper locally, please follow these steps:
`DISCLAIMER: you must be able to create an AWS S3 bucket in order to properly store images/audio files that are uploaded to the site. Upload functionality will not work without it`
  <li>Clone the repository with  </li> 
  
    git clone https://github.com/reversalbino/aa-little-dipper.git
    
  <li>Create a database and database user. If using psql, the commands would be</li>
  
    psql
    CREATE USER hologram_app WITH PASSWORD <password> CREATEDB;
    CREATE DATABASE little_dipper_dev WITH OWNER little_dipper_app;
    
  <li>Navigate to the backend folder and install python packages </li>
  
    pipenv install
    pipenv shell
  
  <li>Create and seed database with </li>
  
    flask db upgrade
    flask seed all
    
  <li>Start the server with </li>
  
    flask run
    
  <li>Next, navigate to the react-app folder and run </li>
  
    npm install
    
  <li>Start the app with </li>
  
    npm start
    
  <li>You should now have Little Dipper running locally!</li>
  
## Future Features

  <li>User Page</li>
  <li>Albums</li>
  <li>Image Metadata</li>
  
