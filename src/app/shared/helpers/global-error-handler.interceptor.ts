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
        if(res instanceof HttpResponse && res.status === 200) {
          this.toasterService.success(res.body.message);
        }
      }),
      catchError((error: any) => {
        if(error instanceof HttpErrorResponse) {
          try {
            this.toasterService.error(error.error.message);
          } catch(e) {
            this.toasterService.error('An error has occurred', ' ', {positionClass: 'toast-bottom-center'});
          } //log error
        }
        return of(error)
      })
    )
  }
}
