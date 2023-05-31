import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './Components/nav/nav.component';
import { ServicesComponent } from './Components/services/services.component';
import { MoreDetailsComponent } from './Components/more-details/more-details.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { FeedbackComponent } from './Components/feedback/feedback.component';
import { AddFeedbackComponent } from './Components/add-feedback/add-feedback.component';
import { HomeComponent } from './Components/home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { FeedbacksComponent } from './Components/feedbacks/feedbacks.component';
import { ServiceComponent } from './Components/service/service.component';
import { ShortTexPipe } from './Pipes/short-tex.pipe';

import { PhoneValidDirective } from './Directions/phone-valid.directive';
import { MoreBitDetailesComponent } from './Components/more-bit-detailes/more-bit-detailes.component';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ServicesComponent,
    MoreDetailsComponent,
    ContactUsComponent,
    FeedbackComponent,
    AddFeedbackComponent,
    HomeComponent,
    FeedbacksComponent,
    ServiceComponent,
    ShortTexPipe,
    PhoneValidDirective,
    MoreBitDetailesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
