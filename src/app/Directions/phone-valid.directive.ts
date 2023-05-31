import { Directive, ElementRef, HostListener } from '@angular/core';
import { AbstractControl, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appPhoneValid]'
})
export class PhoneValidDirective implements Validator{
@HostListener('change')
onChange(){
  let flag=false;
 for (let index = 0; index < this.element.nativeElement.value.length; index++) {
  const char = this.element.nativeElement.value[index];
  if(char<'0' ||char>'9'){
  this.element.nativeElement.style.border='1px solid red';
  flag=true;}
 }
 if(!flag&&(this.element.nativeElement.value.length>9))
 this.element.nativeElement.style.border='1px solid white';
 else{
  this.element.nativeElement.style.border='1px solid red';
 }
}
  constructor(public element:ElementRef) { 
     
  }
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    throw new Error('Method not implemented.');
  }
  registerOnValidatorChange?(fn: () => void): void {
    throw new Error('Method not implemented.');
  }

}
