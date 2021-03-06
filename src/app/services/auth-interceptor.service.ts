import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, from, lastValueFrom } from 'rxjs';
import { OktaAuthService } from '@okta/okta-angular';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private oktaAuth: OktaAuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return from(this.handleAccess(request, next));
  }

  private async handleAccess(request: HttpRequest<any>, next: HttpHandler): Promise<HttpEvent<any>> {
    // only add an access token for secured endpoints
    const theEndpoint = environment.creativecartApiUrl + "/orders";
    const securedEndpoints = [theEndpoint];

    if (securedEndpoints.some(url => request.urlWithParams.includes(url))) {

      // get access token
      const accessToken = await this.oktaAuth.getAccessToken();

      // clone request and add new header with access token
      request = request.clone({
        setHeaders: {
          Authorization: 'Bearer ' + accessToken
        }
      });

    }

    return await lastValueFrom(next.handle(request));

  }
}
