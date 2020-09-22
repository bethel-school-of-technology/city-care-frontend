# City Care Front end
          Create an angular project
                    components 
                              Header
                              Footer
                              Home
                              Email Login
                              Username Login
                              Listing
                              Page Not Found
                              Profile
                              Profile Editor
                              Registration
                              Request
                              Site-Tally
                              Team-Bio
                              Update-Listing
                              Update-Request
                              View-Listing
                              View-Request
                    Helpers
                              Global.Error.Interceptor
                              Token.Interceptor
                    Services
                              auth.guard
                              authorization.service
                              listing.service
                              request.service
                              user.service

          
          Jonathan - Project manager, keeping team on track, responsible for the registration page, create request page, update request page front and back end for all components worked on.
          Jared - Database manager, ensuring proper modeling and database associations. Third week Scrum Master, responsible for the create listing, update listing pages, front and back end for all components worked on.
          Peyton - Design manager, ensuring app wide theme, responsible for styling app, created edit and delete buttons and functionality, created login pages and functionality front and back end for all components worked on.
          Thomas - Front end and back end manager, responsible for app wide authorization, error handling, token generation.  Created the footer page, about us page, update user page, site-postings page, view-listing and view-request pages, front and back end on all components worked on, styled footer.  Helped in all areas of application. 

# Navigation        
          Connected the navigation links used in the header to the components they belong to.
          Connected the team name in the footer to a link leading to the about us page. 


# Generate the starter templates for the structure of the app


          ng g c components/registration - creates registration component
          ng g c components/login - creates login component
          ng g c components/profile - creates profile component
          ng g c components/home - creates home component
          ng g c components/create - creates the create post component
          ng g c components/search - creates the search component
          ng g c components/header - creates the header component
          ng g c components/footer - creates the footer component
          ng g c components/team-bio - create an about us component

# Create the models for the front end use

          ng g class shared/models/user --type=model - create the front end user model
          ng g class shared/models/authorization --type=model - create the front end authorization model
          ng g class shared/models/category --type=model - create the front end category model
          ng g class shared/models/subcategory --type=model - create the front end subcategory model
          ng g class shared/models/listing --type-model -  create the front end listing model
          ng g class shared/models/request --type=model - create the front end request model
          ng g class shared/models/organization --type=model - create the organization model

          Install the ng2-search-filter package - npm i ng2-search-filter --save - update the app module to include the ng2searchpipemodule

# Create three services for use in the application
          ng g s shared/services/authorization - create an authoriztion service for registration, login and authentication
          ng g interceptor shared/services/token - create an http token interceptor
          ng g s shared/services/search - create a service for searching the databases
          ng g s shared/services/request - create a service for the requests made by organizations and users
          ng g s shared/services/listing - create a service for the listings made by organizations and users
          npm install --save toastr
          npm install @angular/animations --save - add angular animations to render the alerts from ngx-toaster

          npm install --save ng2-file-upload
                    


