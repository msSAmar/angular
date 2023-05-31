import { Component,OnInit } from '@angular/core';
import { Service } from 'src/app/Classes/Service/service';
import { HttpService } from 'src/app/Servises/http.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit{
  services:Array<Service>=[];
  constructor(public http:HttpService){}

  ngOnInit(): void {
    console.log("before data")
    this.http.getService().subscribe((data) => { this.services = data; console.log(data) })
    console.log("before data")
  }
}


