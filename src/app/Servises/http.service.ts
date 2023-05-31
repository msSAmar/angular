import { Injectable } from '@angular/core';
import { Feedback } from '../Classes/feedback/feedback';  
import {HttpClient} from '@angular/common/http';
import { getLocaleCurrencyCode } from '@angular/common';
import { Observable, observable } from 'rxjs';
import { Service } from '../Classes/Service/service';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
env='https://localhost:44300/api';
  constructor(private Http:HttpClient) {
  }
 getfeedback():Observable<Feedback[]>{
  return this.Http.get<Feedback[]>(this.env+'/feedback')
 }
getService():Observable<Service[]>{
  return this.Http.get<Service[]>(this.env+'/service')}

saveFeedback(feedback:Feedback):Observable<Feedback[]>{
 return this.Http.post<Feedback[]>(this.env+"/feedback",feedback);
} 
updatefeedback(id:number,likes:number):Observable<Feedback[]>{
  return this.Http.put<Feedback[]>(this.env+"/feedback/"+id,likes);
}
getServiceById(id:number):Observable<Service>{
  return this.Http.get<Service>(this.env+'/service/'+id)
}
}
