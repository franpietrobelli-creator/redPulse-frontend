import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sangue } from './sangue';

describe('Sangue', () => {
  let component: Sangue;
  let fixture: ComponentFixture<Sangue>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sangue],
    }).compileComponents();

    fixture = TestBed.createComponent(Sangue);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
