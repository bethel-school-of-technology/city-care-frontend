import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-handle-errors',
  templateUrl: './handle-errors.component.html',
  styleUrls: ['./handle-errors.component.css']
})
export class HandleErrorsComponent implements OnInit {
public isLoading = false;
  constructor() { }

  ngOnInit(): void {
  }

}
