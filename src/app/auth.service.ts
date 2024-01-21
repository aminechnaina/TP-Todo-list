import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { User } from './user';
import { map ,filter} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient) { }
  btnSignValue:string=''
  getUser(login:string,password:string):Observable<User[]>{
    let params =new HttpParams()
    .set("login",login)
    .set("password",password)
    return this.httpClient.get<User[]>('http://localhost:3000/users',{params})


    //return this.httpClient.get<User[]>('http://localhost:3000/users').pipe(
     // map(users=>users.filter(user=>user.login===login&&user.password===password))

  }
}
