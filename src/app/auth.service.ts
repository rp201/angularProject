import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface RegisterResponse{
  success : boolean
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  constructor( private http: HttpClient) { }

  register(username, password){
    return this.http.post<RegisterResponse>('/api/register',{
      username,
      password
    })
  }
}
