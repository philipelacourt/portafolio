import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectoScrapingStreamComponent } from './proyecto-scraping-stream.component';

describe('ProyectoScrapingStreamComponent', () => {
  let component: ProyectoScrapingStreamComponent;
  let fixture: ComponentFixture<ProyectoScrapingStreamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectoScrapingStreamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectoScrapingStreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
