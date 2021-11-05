import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColecaoPessoaComponent } from './colecao-pessoa.component';

describe('ColecaoPessoaComponent', () => {
  let component: ColecaoPessoaComponent;
  let fixture: ComponentFixture<ColecaoPessoaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColecaoPessoaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColecaoPessoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
