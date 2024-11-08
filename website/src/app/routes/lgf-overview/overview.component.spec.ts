import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LgfOverviewComponent } from './overview.component';

describe('OverviewComponent', () => {
  let component: LgfOverviewComponent;
  let fixture: ComponentFixture<LgfOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LgfOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LgfOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
