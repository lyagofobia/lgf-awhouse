import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LgfThemesComponent } from './themes.component';

describe('ThemesComponent', () => {
  let component: LgfThemesComponent;
  let fixture: ComponentFixture<LgfThemesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LgfThemesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LgfThemesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
