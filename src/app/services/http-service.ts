import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';;
import { Observable, map } from 'rxjs';
import { Food } from '../model/food';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private REST_API_SERVER='http://localhost:3000';
  private httpOptions={
    headers:new HttpHeaders({
      'Content-Type':'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) { }
  public getFoods() : Observable<any>{
    const url = `${this.REST_API_SERVER}/foods`;
    console.log('getFood=',url);
    return this.httpClient.get<any>(url, this.httpOptions);
  }

  public getFood(id : string) : Observable<Food>{
    const url = `${this.REST_API_SERVER}/foods/${id}`;
    console.log('getFood2=',id);
    return this.httpClient.get<Food>(url).pipe(
      )
  }
  //xóa stock
  public deleteFood(id: string): Observable<any> {
    const url = `${this.REST_API_SERVER}/foods/${id}`;
    return this.httpClient.delete<any>(url, this.httpOptions);
  }
  public postFood(body : any): Observable<any>{
    const url = `${this.REST_API_SERVER}/foods`;
    console.log('postFood=',url);
    console.log('postFood: body',body);
    return this.httpClient.post<any>(url,body);
  }
  public postUser(user: any){
    const url = `${this.REST_API_SERVER}/user`;
    return this.httpClient.post<any>(url,user);
  }
  login(username: string, password: string): Observable<any> {
    const url = `${this.REST_API_SERVER}/user`;
    return this.httpClient.post(url, {
      username: username,
      password: password
    }).pipe(map((resp: any) => {
      return resp;
    }));
  }
}

