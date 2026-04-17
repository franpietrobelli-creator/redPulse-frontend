import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hospitais } from './hospitais';

describe('Hospitais', () => {
  let component: Hospitais;
  let fixture: ComponentFixture<Hospitais>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hospitais],
    }).compileComponents();

    fixture = TestBed.createComponent(Hospitais);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
