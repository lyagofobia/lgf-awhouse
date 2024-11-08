import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LgfAngulationsComponent } from './lgf-angulations.component';

describe('LgfAngulationsComponent', () => {
  let component: LgfAngulationsComponent;
  let fixture: ComponentFixture<LgfAngulationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LgfAngulationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LgfAngulationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
