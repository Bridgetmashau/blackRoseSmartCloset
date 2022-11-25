import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError ,} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  set_register(user: { email: any; password: any; ConfirmPassword: any; }) {
    throw new Error('Method not implemented.');
  }
  REST_API: string = 'http://localhost:3000';
  // Http Header
  // httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  // baseUrl = 'http://localhost:3000'

constructor(private httpClient: HttpClient) { } 

// set_register(register_data:any){
//   return this.Http.post(`${this.baseUrl}register`,register_data)   }

// }

updateUser(id: any, data: any): Observable<any> {
  return this.httpClient.patch(`${this.REST_API}/users/${id}`, data);
}
AddUser(userDetails:any): Observable<any> {
  let API_URL = this.REST_API + '/users';
  return this.httpClient.post(API_URL, userDetails)
}

UserLogin(loginDetails:any): Observable<any> {
  let API_URL = this.REST_API + '/users/login';
  return this.httpClient.post(API_URL, loginDetails)
}
GetUserByEmail(email:any): Observable<any> {
  let API_URL = this.REST_API+ '/profile/usersByEmail';
  return this.httpClient.get(API_URL, email)
}
updateProfile(id: any, data: any): Observable<any> {
  let API_URL = this.REST_API + '/profile/users/:id';
  return this.httpClient.put(API_URL, data).pipe();
}

}