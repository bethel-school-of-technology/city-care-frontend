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
      FirstName: 'Edward',
      LastName: 'Kremer',
      OrgName: ' ',
      ContactName: 'Thomas',
      Username: 'tbone7243',
      Password: 'tom',
      Email: 'tbone7243@nc.rr.com',
      Phone: 9197487412,
      MobilePhone: 9194787412,
      Fax: 111111111,
      ContactMethod: 'Phone',
      Address1: '2403 June Dr.',
      Address2: '2403 June Dr.',
      City: 'Hillsborough',
      State: 'North Carolina',
      County: 'Orange',
      Zip: 27278
    }
  ]

  users: string;
  filterData = [
    {
      id: 0,
      FirstName: 'John',
      LastName: 'Doe',
      OrgName: 'WebTEK',
      ContactName: 'John',
      Username: 'jdoe',
      Password: 'doe',
      Email: 'tkremer@nc.rr.com',
      Phone: 9197487412,
      MobilePhone: 9194787412,
      Fax: 111111111,
      ContactMethod: 'Phone',
      Address1: '2403 June Dr.',
      Address2: '2403 June Dr.',
      City: 'Hillsborough',
      State: 'North Carolina',
      County: 'Orange',
      Zip: 27278
    },
    {
      id: 0,
      FirstName: 'Jimmy',
      LastName: 'Dean',
      OrgName: ' ',
      ContactName: 'Jim',
      Username: 'jdean',
      Password: 'jim',
      Email: 'jimmydean@sausage.com',
      Phone: 9197487412,
      MobilePhone: 9197487412,
      Fax: 111111111,
      ContactMethod: 'Phone',
      Address1: '2403 June Dr.',
      Address2: '2403 June Dr.',
      City: 'Hillsborough',
      State: 'North Carolina',
      County: 'Orange',
      Zip: 27278
    },
    {
      id: 0,
      FirstName: 'Frank',
      LastName: 'Furter',
      OrgName: 'Franks',
      ContactName: 'Franky',
      Username: 'ffurter',
      Password: 'frank',
      Email: 'frank@frank.com',
      Phone: 9197487412,
      MobilePhone: 9197487412,
      Fax: ' ',
      ContactMethod: 'Phone',
      Address1: '2403 June Dr.',
      Address2: '2403 June Dr.',
      City: 'Hillsborough',
      State: 'North Carolina',
      County: 'Orange',
      Zip: 27278
    },
    {
      id: 0,
      FirstName: 'Adam',
      LastName: 'Ellis',
      OrgName: ' ',
      ContactName: 'Adam',
      Username: 'aellis',
      Password: 'adam',
      Email: 'aellis@nc.rr.com',
      Phone: 9197487412,
      MobilePhone: 9197487412,
      Fax: 111111111,
      ContactMethod: 'Phone',
      Address1: '2403 June Dr.',
      Address2: '2403 June Dr.',
      City: 'Raleigh',
      State: 'North Carolina',
      County: 'Wake',
      Zip: 27616
    },
    {
      id: 0,
      FirstName: 'James',
      LastName: 'Bond',
      OrgName: 'Bondtek',
      ContactName: 'James',
      Username: 'jbond',
      Password: 'bond',
      Email: 'jamesbond@nc.rr.com',
      Phone: 9197487412,
      MobilePhone: 9197487412,
      Fax: 111111111,
      ContactMethod: 'Phone',
      Address1: '2403 June Dr.',
      Address2: '2403 June Dr.',
      City: 'Raleigh',
      State: 'North Carolina',
      County: 'Wake',
      Zip: 27616
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
