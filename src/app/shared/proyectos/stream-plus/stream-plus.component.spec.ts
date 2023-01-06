import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamPlusComponent } from './stream-plus.component';

describe('StreamPlusComponent', () => {
  let component: StreamPlusComponent;
  let fixture: ComponentFixture<StreamPlusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StreamPlusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StreamPlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
