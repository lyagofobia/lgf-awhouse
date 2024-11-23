import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LgfAngularCinemaComponent } from './lgf-angular-cinema.component';

describe('LgfAngularCinemaComponent', () => {
  let component: LgfAngularCinemaComponent;
  let fixture: ComponentFixture<LgfAngularCinemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LgfAngularCinemaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LgfAngularCinemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
