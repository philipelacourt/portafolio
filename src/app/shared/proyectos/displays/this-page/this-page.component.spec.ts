import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThisPageComponent } from './this-page.component';

describe('ThisPageComponent', () => {
  let component: ThisPageComponent;
  let fixture: ComponentFixture<ThisPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThisPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThisPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
