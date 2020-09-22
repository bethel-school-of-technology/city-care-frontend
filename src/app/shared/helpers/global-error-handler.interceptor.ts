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
  ) { }


  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse && event.status === 201) {
          this.toasterService.success(event.body.message, status, { positionClass: 'toast-bottom-center' });
        }  else if(event instanceof HttpResponse && event.status === 202) {
          this.toasterService.success(event.body.message, status, { positionClass: 'toast-bottom-center' });
        }
      }),
      catchError((error: any) => {
        if (error instanceof HttpErrorResponse) {
          try {
            this.toasterService.error('An error has occured!', 'Foul things have happend, internal server error!', { positionClass: 'toast-bottom-center' });
          } catch (e) {
            this.toasterService.error('A 401 error has occurred!', 'User already exists!', { positionClass: 'toast-bottom-center' });
          } //log error
        }
        return of(error)
      })
    )
  }
}
