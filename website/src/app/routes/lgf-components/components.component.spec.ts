import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LgfComponentsComponent } from './components.component';

describe('ComponentsComponent', () => {
  let component: LgfComponentsComponent;
  let fixture: ComponentFixture<LgfComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LgfComponentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LgfComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
