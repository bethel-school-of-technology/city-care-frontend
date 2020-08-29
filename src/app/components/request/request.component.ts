import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../shared/services/request.service';
import { Router } from '@angular/router';
import { Request } from '../../shared/models/request.model';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css'],
})
export class RequestComponent implements OnInit {
  request: Request = new Request();

  constructor(private requestService: RequestService, private router: Router) {}

  ngOnInit() {}

  createRequest() {
    this.requestService.createRequest(this.request);
  }
}
