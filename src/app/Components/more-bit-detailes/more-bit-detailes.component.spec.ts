import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreBitDetailesComponent } from './more-bit-detailes.component';

describe('MoreBitDetailesComponent', () => {
  let component: MoreBitDetailesComponent;
  let fixture: ComponentFixture<MoreBitDetailesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreBitDetailesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoreBitDetailesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
