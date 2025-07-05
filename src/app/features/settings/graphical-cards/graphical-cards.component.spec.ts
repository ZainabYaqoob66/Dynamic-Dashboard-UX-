import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicalCardsComponent } from './graphical-cards.component';

describe('GraphicalCardsComponent', () => {
  let component: GraphicalCardsComponent;
  let fixture: ComponentFixture<GraphicalCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraphicalCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphicalCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
