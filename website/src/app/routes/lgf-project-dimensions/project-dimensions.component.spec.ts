import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDimensionsComponent } from './project-dimensions.component';

describe('ProjectDimensionsComponent', () => {
  let component: ProjectDimensionsComponent;
  let fixture: ComponentFixture<ProjectDimensionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectDimensionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectDimensionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
