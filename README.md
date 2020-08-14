<!-- # CityCare After forking and cloning repository, run npm install to install all of the dependencies.  Do this in the city-care directory and in the back directory if it doesn't work with the node_modules.  Also make sure you are checked out to the dev branch before starting and run a git pull.

          First steps create a project on GitHub to host for the group temporarily.  Create the basic angular front end with an empty express backend called back.
                    ng new City-Care - create the angular front end basic app with routing and css styles.
                    express --no-view - create an express backend with no view since it will be an api server verses an application. 
          Next Steps will be to connect the local project to github add collaborators to it, make it private and start work. 
                    git init - initialize local github repository
                    git add . - add everything in the project to the local repository.
                    git commit -m "First project commit, created front and back end."
                    git remote add origin git@github.com:tbone7243/Final_Group_Project_City_Care.git
                    git push -u origin master - push project 

                    git branch dev - create a project developer branch.         
                    git checkout dev - change into the dev branch to begin project work.
                    git add . - add everything to the dev branch.
                    git commit -m "First commit on the dev branch, added everything from the master branch."
                    git push -u origin dev - push the dev branch to the remote repository
                   on GitHub changed the default branch to the dev branch to leave the master branch in tact. 
                   From the terminal git pull to sync remote repository to the local repository. 
 -->

# Navigation        
          Connected the navigation links used in the header to the components they belong to


# Generate the starter templates for the structure of the app


          ng g c components/registration - creates registration component
          ng g c components/login - creates login component
          ng g c components/profile - creates profile component
          ng g c components/home - creates home component
          ng g c components/create - creates the create post component
          ng g c components/search - creates the search component
          ng g c components/header - creates the header component
          ng g c components/footer - creates the footer component

# Create the models for the front end use

          ng g class shared/models/user --type=model - create the front end user model
          ng g class shared/models/authorization --type=model - create the front end authorization model
          ng g class shared/models/category --type=model - create the front end category model
          ng g class shared/models/subcategory --type=model - create the front end subcategory model
          ng g class shared/models/listing --type-model -  create the front end listing model
          ng g class shared/models/request --type=model - create the front end request model
          ng g class shared/models/organization --type=model - create the organization model

# Create three services for use in the application
          ng g s shared/services/authorization - create an authoriztion service for registration, login and authentication
          ng g s shared/services/search - create a service for searching the databases
          ng g s shared/services/request - create a service for the requests made by organizations and users
          ng g s shared/services/listing - create a service for the listings made by organizations and users
          

          

