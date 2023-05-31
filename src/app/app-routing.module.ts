import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { FeedbackComponent } from './Components/feedback/feedback.component';
import { FeedbacksComponent } from './Components/feedbacks/feedbacks.component';
import { HomeComponent } from './Components/home/home.component';
import { ServicesComponent } from './Components/services/services.component';
import { AddFeedbackComponent } from './Components/add-feedback/add-feedback.component';
import { MoreDetailsComponent } from './Components/more-details/more-details.component';
const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"service",component:ServicesComponent},
  {path:"feedbacks",component:FeedbacksComponent},
  {path:"contact",component:ContactUsComponent},
{path:"add-feedback",component:AddFeedbackComponent},
{path:"more-detailes/:service",component:MoreDetailsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
