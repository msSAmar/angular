import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Feedback } from 'src/app/Classes/feedback/feedback';
import { HttpService } from 'src/app/Servises/http.service';
import { SubjectService } from 'src/app/Servises/subject.service';
@Component({
  selector: 'app-add-feedback',
  templateUrl: './add-feedback.component.html',
  styleUrls: ['./add-feedback.component.scss']
})
export class AddFeedbackComponent implements OnInit{
  constructor(public http:HttpService,public router:Router,public subjectser:SubjectService){}
  ngOnInit(): void {
    
  }
  form=new FormGroup({
    name:new FormControl('',Validators.required),
    email:new FormControl('',Validators.required),
Telephone:new FormControl('',[Validators.required,Validators.minLength(9),Validators.minLength(10)]),
Comments:new FormControl('',[Validators.required,Validators.minLength(5)]),
  })
feedback:Feedback=new Feedback;
id:number=0
  onSubmit() {
    
    this.feedback.id=this.id++;
    this.feedback.Name=this.form.value.name!=null?this.form.value.name:" ";
    this.feedback.Content=this.form.value.Comments!=null?this.form.value.Comments:" ";
    this.feedback.Date=new Date();
    this.feedback.likes=0;
    this.subjectser.giftCard$.next("A gift card is sent to your email in these moments")
  this.http.saveFeedback(this.feedback).subscribe((data)=>{console.log(data)})
  this.router.navigate(['/feedbacks'])

  }
  commond(){

  }
}
