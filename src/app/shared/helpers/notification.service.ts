import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(
    private toasterService: ToastrService
  ) { }
  //Create a new listing message of success
  newListing() {
    this.toasterService.success('You have successfully created a new listing.', 'Congratulations!', { positionClass: 'toast-bottom-center' });
  }
  //Update a listing success
  editListing() {
    this.toasterService.success('Your changes have been saved.', 'Successful update!', { positionClass: 'toast-bottom-center' });
  }
  //Delete a listing success
  removeListing() {
    this.toasterService.success('You have removed your listing', 'Successful delete!', { positionClass: 'toast-bottom-center' });
  }
  //Update a user success
  editUser() {
    this.toasterService.success('Your profile has been updated.', 'Success!', { positionClass: 'toast-bottom-center' });
  }
  createUser() {
    this.toasterService.success('Congratulations!', 'Welcome to the City Care community.', { positionClass: 'toast-bottom-center' });
  }
  newRequest() {
    this.toasterService.success('You have successfully created a new request.', 'Success!', { positionClass: 'toast-bottom-center' });
  }
  editRequest() {
    this.toasterService.success('The changes to your request have been saved.', 'Congratulations!', { positionClass: 'toast-bottom-center' });
  }
  removeRequest() {
    this.toasterService.success('Your request has been removed from the database!', 'Success', { positionClass: 'toast-bottom-center' });
  }
  fileUploadSuccessful() {
    this.toasterService.success('File successfully uploaded!', 'Congrats!', { positionClass: 'toast-bottom-center'})
  }
}
