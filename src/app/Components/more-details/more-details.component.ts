import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Service } from 'src/app/Classes/Service/service';
import { HttpService } from 'src/app/Servises/http.service';

@Component({
  selector: 'app-more-details',
  templateUrl: './more-details.component.html',
  styleUrls: ['./more-details.component.scss']
})
export class MoreDetailsComponent implements OnInit{
  service:Service=new Service;
  constructor(public route:ActivatedRoute,public http:HttpService){}
  ngOnInit(): void {
   this.route.paramMap.subscribe((params)=>{
    let serviceId=params.get('service');
    console.log(serviceId);
    this.http.getServiceById(Number(serviceId)).subscribe((data) => { this.service=data; })
    
   })
  }
 
}
