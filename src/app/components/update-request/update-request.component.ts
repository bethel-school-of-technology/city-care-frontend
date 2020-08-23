import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from '../../shared/services/request.service';
import { Request } from '../../shared/models/request.model';

@Component({
  selector: 'app-update-request',
  templateUrl: './update-request.component.html',
  styleUrls: ['./update-request.component.css']
})
export class UpdateRequestComponent implements OnInit {

request: Request;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private requestService: RequestService
  ) { }

  ngOnInit() {
    const requestId = +this.route.snapshot.paramMap.get('id');
    this.requestService.getUserRequest(requestId).subscribe(request => this.request = request);
  }

}
