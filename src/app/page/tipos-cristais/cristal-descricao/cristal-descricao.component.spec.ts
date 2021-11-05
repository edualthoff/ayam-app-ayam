import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CristalDescricaoComponent } from './cristal-descricao.component';

describe('CristalDescricaoComponent', () => {
  let component: CristalDescricaoComponent;
  let fixture: ComponentFixture<CristalDescricaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CristalDescricaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CristalDescricaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
