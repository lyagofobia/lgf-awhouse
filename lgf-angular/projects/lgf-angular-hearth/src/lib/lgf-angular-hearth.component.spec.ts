import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LgfAngularHearthComponent } from './lgf-angular-hearth.component';

describe('LgfAngularHearthComponent', () => {
  let component: LgfAngularHearthComponent;
  let fixture: ComponentFixture<LgfAngularHearthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LgfAngularHearthComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LgfAngularHearthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
