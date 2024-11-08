import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LgfProjectDimensionsComponent } from './project-dimensions.component';

describe('ProjectDimensionsComponent', () => {
  let component: LgfProjectDimensionsComponent;
  let fixture: ComponentFixture<LgfProjectDimensionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LgfProjectDimensionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LgfProjectDimensionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
