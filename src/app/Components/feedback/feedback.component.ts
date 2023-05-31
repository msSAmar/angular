import { Component,Input,OnInit } from '@angular/core';
import { Feedback } from 'src/app/Classes/feedback/feedback';
import { HttpService } from 'src/app/Servises/http.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})

export class FeedbackComponent implements OnInit{
@Input()
feedback:Feedback=new Feedback;
  constructor(public http:HttpService) { }
  ngOnInit(): void {
    
  }
  likes(){
    this.feedback.likes+=1;
    console.log(this.feedback.id)
    this.http.updatefeedback(this.feedback.id,this.feedback.likes).subscribe((data)=>console.log(data),(err)=>{console.log(err)})
  }
}
