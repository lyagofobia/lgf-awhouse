import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LgfAngularFurnishingsComponent } from './lgf-angular-furnishings.component';

describe('LgfAngularFurnishingsComponent', () => {
  let component: LgfAngularFurnishingsComponent;
  let fixture: ComponentFixture<LgfAngularFurnishingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LgfAngularFurnishingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LgfAngularFurnishingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
