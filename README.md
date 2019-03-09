# Eat Dat Burger!

## Description

This is a burger-eating application that utlizes MySQL, Node, Express, Handlebars and a homemade ORM. 
Node and MySQL are used to query and route data into the app, while Handlebars generates the HTML page.

## How it Works

The user can select an existing burger or enter a new burger name (to add it to the menu). This will also add the new burger entry into the MySQL database. 
The initial burger entry is added as available on the menu and placed on the left side of the screen. 
The user can then "eat" any burger by clicking on it, when then moves the burger into the adjacent column and updates its status accordingly within the database.

## Demo
Try out this burger-eating application [here](https://secure-ocean-65753.herokuapp.com/)!

## Installation
To run the application locally, first clone this repository with the following command.

`git clone git@github.com:cdgillis/burger.git`

Next, install the application dependencies.

`cd burger\n
npm install`

Finally, run the node server locally.

`node server.js`

Now, open the local application on port 8080 at the URL: http://localhost:8080/.

Enjoy your burger(s)!
