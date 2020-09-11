import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { AuthorizationService } from '../services/authorization.service';

@Injectable()
export class GlobalErrorHandlerInterceptor implements HttpInterceptor {

  constructor(
    authorizationService: AuthorizationService,
    public toasterService: ToastrService
  ) {}


  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap(res => {
        if(res instanceof HttpResponse && res.status === 201) {
          this.toasterService.success(res.body.message, 'Request successful', { positionClass: 'toast-bottom-center'});
        }
      }),
      catchError((error: any) => {
        if(error instanceof HttpErrorResponse) {
          try {
            this.toasterService.error(error.message, 'An error has occurred with a status code of 400', {positionClass: 'toast-bottom-center'});
          } catch(e) {
            this.toasterService.error(error.message, 'An error has occurred', {positionClass: 'toast-bottom-center'});
          } //log error
        }
        return of(error)
      })
    )
  }
}
