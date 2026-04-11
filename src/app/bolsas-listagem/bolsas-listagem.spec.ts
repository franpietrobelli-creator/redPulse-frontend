import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BolsasListagem } from './bolsas-listagem';

describe('BolsasListagem', () => {
  let component: BolsasListagem;
  let fixture: ComponentFixture<BolsasListagem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BolsasListagem],
    }).compileComponents();

    fixture = TestBed.createComponent(BolsasListagem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
