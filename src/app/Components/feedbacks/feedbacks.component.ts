import { Component,OnInit } from '@angular/core';
import { Feedback } from 'src/app/Classes/feedback/feedback';
import { HttpService } from 'src/app/Servises/http.service';

@Component({
  selector: 'app-feedbacks',
  templateUrl: './feedbacks.component.html',
  styleUrls: ['./feedbacks.component.scss']
})
export class FeedbacksComponent implements OnInit{
  feedbacks: Array<Feedback> = [];
  constructor(public httpSer: HttpService){}
  ngOnInit(): void {
    console.log("before data")
    this.httpSer.getfeedback().subscribe((data) => { this.feedbacks = data; console.log(data) })
    console.log("before data")
  }
}
