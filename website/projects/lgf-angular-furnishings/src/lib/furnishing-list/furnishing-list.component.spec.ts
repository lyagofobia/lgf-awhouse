import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FurnishingListComponent } from './furnishing-list.component';

describe('FurnishingListComponent', () => {
  let component: FurnishingListComponent;
  let fixture: ComponentFixture<FurnishingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FurnishingListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FurnishingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
