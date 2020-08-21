import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/models/user.model';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  user: User[] = [
    {
      id: 0,
      first_name: 'Edward',
      last_name: 'Kremer',
      org_name: ' ',
      contact_name: 'Thomas',
      username: 'tbone7243',
      password: 'tom',
      email: 'tbone7243@nc.rr.com',
      phone: 9197487412,
      mobile_phone: 9194787412,
      fax: 111111111,
      contact_method: 'phone',
      address1: '2403 June Dr.',
      address2: '2403 June Dr.',
      city: 'Hillsborough',
      state: 'North Carolina',
      county: 'Orange',
      zip: 27278
    }
  ]
  users: string;
  filterData = [
    {
      id: 1,
      userId: 2,
      first_name: 'John',
      last_name: 'Doe',
      org_name: 'WebTEK',
      contact_name: 'John',
      username: 'jdoe',
      password: 'doe',
      email: 'tkremer@nc.rr.com',
      phone: 9197487412,
      mobile_phone: 9194787412,
      fax: 111111111,
      contactMethod: 'phone',
      address1: '2403 June Dr.',
      address2: '2403 June Dr.',
      city: 'Hillsborough',
      state: 'North Carolina',
      county: 'Orange',
      zip: 27278
    },
    {
      id: 2,
      userId: 3,
      first_name: 'Jimmy',
      last_name: 'Dean',
      org_name: ' ',
      contact_name: 'Jim',
      username: 'jdean',
      password: 'jim',
      email: 'jimmydean@sausage.com',
      phone: 9197487412,
      mobile_phone: 9197487412,
      fax: 111111111,
      contactMethod: 'phone',
      address1: '2403 June Dr.',
      address2: '2403 June Dr.',
      city: 'Hillsborough',
      state: 'North Carolina',
      county: 'Orange',
      zip: 27278
    },
    {
      id: 3,
      userId: 4,
      first_name: 'Frank',
      last_name: 'Furter',
      org_name: 'Franks',
      contact_name: 'Franky',
      username: 'ffurter',
      password: 'frank',
      email: 'frank@frank.com',
      phone: 9197487412,
      mobile_phone: 9197487412,
      fax: ' ',
      contactMethod: 'phone',
      address1: '2403 June Dr.',
      address2: '2403 June Dr.',
      city: 'Hillsborough',
      state: 'North Carolina',
      county: 'Orange',
      zip: 27278
    },
    {
      id: 5,
      userId: 6,
      first_name: 'Adam',
      last_name: 'Ellis',
      org_name: ' ',
      contact_name: 'Adam',
      username: 'aellis',
      password: 'adam',
      email: 'aellis@nc.rr.com',
      phone: 9197487412,
      mobile_phone: 9197487412,
      fax: 111111111,
      contactMethod: 'phone',
      address1: '2403 June Dr.',
      address2: '2403 June Dr.',
      city: 'Raleigh',
      state: 'North Carolina',
      county: 'Wake',
      zip: 27616
    },
    {
      id: 7,
      userId: 8,
      first_name: 'James',
      last_name: 'Bond',
      org_name: 'Bondtek',
      contact_name: 'James',
      username: 'jbond',
      password: 'bond',
      email: 'jamesbond@nc.rr.com',
      phone: 9197487412,
      mobile_phone: 9197487412,
      fax: 111111111,
      contactMethod: 'phone',
      address1: '2403 June Dr.',
      address2: '2403 June Dr.',
      city: 'Raleigh',
      state: 'North Carolina',
      county: 'Wake',
      zip: 27616
    }
  ]
  constructor() { }
  ngOnInit(): void {
  }
}