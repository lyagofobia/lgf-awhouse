import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LgfRetroBoardGameComponent } from './retro-board-game.component';

describe('RetroBoardGameComponent', () => {
  let component: LgfRetroBoardGameComponent;
  let fixture: ComponentFixture<LgfRetroBoardGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LgfRetroBoardGameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LgfRetroBoardGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
