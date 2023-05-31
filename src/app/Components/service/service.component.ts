import { Component, Input,OnInit } from '@angular/core';
import { Service } from 'src/app/Classes/Service/service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})

export class ServiceComponent implements OnInit{
@Input()
service:Service=new Service;

url="../../../assets/images/"
constructor(){}
ngOnInit(): void {
 
}

}
