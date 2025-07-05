import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalCardsComponent } from './normal-cards.component';

describe('NormalCardsComponent', () => {
  let component: NormalCardsComponent;
  let fixture: ComponentFixture<NormalCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NormalCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NormalCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
