# City Care Front end
          Create an angular project
                    

# Navigation        
          Connected the navigation links used in the header to the components they belong to.
          Connected the team name in the footer to a link leading to the about us page. 


# Generate the starter templates for the structure of the app


          ng g c components/registration - creates registration component

          ng g c components/email-login - creates email-login component

          ng g c components/profile - creates profile component

          ng g c components/home - creates home component

          ng g c components/header - creates the header component

          ng g c components/footer - creates the footer component

          ng g c components/team-bio - create an about us component

          ng g c components/listing - page for organizations to create listings of goods or services.

          ng g c components/request - page for non organization users to submit needs or requests for goods or services

          ng g c component/page-not-found - Centrel 404 page the users will land on when routes don't match what is put in the browser.

          ng g c components/profile-editor - this is the update user page.

          ng g c components/site-tally page - page where requests and listings will be displayed by the zip code.

          ng g c components/update-listing - page for organization users to update existing listings

          ng g c components/update-request - page for non organization users to update their requests

          ng g c components/username-login - page to allow users or organizations to log in with a username

          ng g c components/view-listing - page for all users to view the details of a listing including the information about the organization that posted it.
          
          ng g c components/view-request - page for all users to view details about a request as well as the user that made it.

# Create the models for the front end use

          ng g class shared/models/user --type=model - create the front end user model

          ng g class shared/models/authorization --type=model - create the front end authorization model

          ng g class shared/models/category --type=model - create the front end category model

          ng g class shared/models/subcategory --type=model - create the front end subcategory model

          ng g class shared/models/listing --type-model -  create the front end listing model

          ng g class shared/models/request --type=model - create the front end request model
          
          ng g class shared/models/organization --type=model - create the organization model


# Create four services for use in the application
          ng g s shared/services/authorization - create an authoriztion service for registration, email-login and authentication

          ng g interceptor shared/services/token - create an http token interceptor

          ng g s shared/services/request - create a service for the requests made by organizations and users

          ng g s shared/services/listing - create a service for the listings made by organizations and users

          ng g s shared/services/user - service for getting profiles, and anything to do with the user but not authorization

          npm install --save toastr - messaging and error service

          npm install @angular/animations --save - add angular animations to render the alerts from ngx-toaster

                    


