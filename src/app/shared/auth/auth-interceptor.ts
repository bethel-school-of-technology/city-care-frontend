import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthorizationService } from '../auth/authorization.service';

@Injectable()

export class AuthInterceptor implements HttpInterceptor {
          constructor(private authorizationService: AuthorizationService) {}

          intercept(req: HttpRequest<any>, next: HttpHandler) {
                    const authToken = this.authorizationService.getToken();
                    const authRequest = req.clone({
                              headers: req.headers.set('Authorization', "Bearer " + authToken)
                    });
                    return next.handle(authRequest);
          }
}