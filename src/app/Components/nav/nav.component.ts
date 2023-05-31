import { Component,OnInit } from '@angular/core';
import { SubjectService } from 'src/app/Servises/subject.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit{
  value:string="";
  constructor(public subjectser:SubjectService){}
  ngOnInit(): void {
    this.subjectser.giftCard$.subscribe((value:string)=>{this.value=value});
  }

}
