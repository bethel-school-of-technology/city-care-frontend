import { Component, OnInit, OnDestroy } from '@angular/core';
import { ErrorIntercept } from '../../shared/services/error-interceptor';
import { Message } from '../../shared/models/error.model';

@Component({
  selector: 'app-handle-errors',
  templateUrl: './handle-errors.component.html',
  styleUrls: ['./handle-errors.component.css']
})
export class HandleErrorsComponent implements OnInit, OnDestroy {

  public isLoading = false;
  public message: string;

  constructor(
    private error: ErrorIntercept
  ) { }

  ngOnInit() {
    this.getError();
  }
 getError() {
 }
  ngOnDestroy() {

  }
}
