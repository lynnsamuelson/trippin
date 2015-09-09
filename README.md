# trippin

This is a Nashville Software School project to build an application from scratch that allows the user to input a location, mark it as visited and write a review regarding of the location.  

##Running the Application

Clone the repo

    mkdir ~/projects && cd ~/projects
    git clone https://github.com/lynnsamuelson/movie-history.git

##Serve the application

Go to the application root folder and start the server.

    cd ~/projects/movie-history
    http-server ./ 

##Making your own Firebase Database

To have a database that you can access, go to:

https://www.firebaseio.com/
and make an account. 

Replace the url to the firebase database on line 6 of load-data.js and line 9 of display-visied-list.js with the url to your database. Now you can open your browser and go to http://localhost:8081 (or whichever port it reports it is using).

