## QuHeer (formerly known as Gaydar) Api

## App Summary
A user-driven app that lists accomodations (hotels, Airbnbs, etc) that cater to the LGBT community. Users can add listings and reviews they find, to help others in their travels.

## Technologies Used
Mongo, Mongoose, Express, Node.js, Body-Parser, Cors

(Note: Dotenv and Passport dependencies are currently unused)

## Approach
The app is accomodation-centric. There are three models - Accomodation, Review, and User - with the Reviews model nested within the User model.

## Issues

The code to access all the reveiws for one particular accommodation listing is still incomplete. *See the Review controller for findReviewsForOneLodging


## How to fork a repository

Find the link on GitHub

In the top right, below the plus-sign we used to create a new repository, there is a "Fork" button - click it. Forking

A modal may pop up with the title, "Where should we fork this repository?". If it does, click on your github.com username (not the enterprise github, if they're different).

If everything works, you'll see a screen that has a book with a fork in it being scanned.

You'll then be sent to a page that looks like the one you were just on for your own repo. Take a close look at the heading in the top left: it should have your username and then the name of the repository and underneath that something like, "forked from <your_partners_uesername>/<the_name_of_the_repo>"

## Cloning
Now that you've forked the repository, you need some way to get it on to your computer (locally). This process is called cloning

How to clone a repository From the repo page for the fork of my repository (where we left off in the previous step), find the green button that says "Clone or Download".

Copy the link by highlighting it and hitting cmd + C or clicking on the clipboard button next to the link. clone or download

Open up a new terminal window and navigate to your sandbox directory

The command to clone a repository with git is git clone <url_for_the_repo_you_want_to_clone>. You can optionally pass in a name for the repository if you would like to name the working directory when you clone don't worry about that right now though. Change in to your new directory and run git log to see the commit history.
