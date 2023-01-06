import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstaPaginaComponent } from './esta-pagina.component';

describe('EstaPaginaComponent', () => {
  let component: EstaPaginaComponent;
  let fixture: ComponentFixture<EstaPaginaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstaPaginaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstaPaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
