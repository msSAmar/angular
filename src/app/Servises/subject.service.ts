import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
giftCard$:BehaviorSubject<string>=new BehaviorSubject("Bt adding feedback  you  are entitled to a gift card");

  constructor() { }
}
