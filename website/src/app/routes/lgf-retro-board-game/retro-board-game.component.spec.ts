import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetroBoardGameComponent } from './retro-board-game.component';

describe('RetroBoardGameComponent', () => {
  let component: RetroBoardGameComponent;
  let fixture: ComponentFixture<RetroBoardGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RetroBoardGameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetroBoardGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
