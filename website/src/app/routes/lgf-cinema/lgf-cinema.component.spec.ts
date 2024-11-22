import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LgfCinemaComponent } from './lgf-cinema.component';

describe('LgfCinemaComponent', () => {
  let component: LgfCinemaComponent;
  let fixture: ComponentFixture<LgfCinemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LgfCinemaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LgfCinemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
