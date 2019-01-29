React script project base
==========================

## Heroku App

Can be deployed on heroku

## Launch React Front

* cd react-ui then yarn start
* see result on http://localhost:3000
* cd react-ui then yarn test to launch jest test
* create-react-app-sass project

## Launch Server (Optionnal on localhost Indispensable for Heroku)

* yarn start
* see result on http://localhost:5000

## Deploy on Heroku from Root (Preproduction plateforme)

* Install the Heroku CLI
* Download and install the Heroku CLI.

## If you haven't already, log in to your Heroku account and follow the prompts to create a new SSH public key.

$ heroku login
* Create a new Git repository
* Initialize a git repository in a new or existing directory

$ cd my-project/
$ git init
$ heroku git:remote -a reactjsprojectname

* Deploy your application
* Commit your code to the repository and deploy it to Heroku using Git.
$ git add .
$ git commit -am "make it better"
$ git push heroku master
OR
$ git push heroku branchname:master

* Existing Git repository
* For existing repositories, simply add the heroku remote
$ heroku git:remote -a reactjsprojectname
