import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaysComponentComponent } from './days-component.component';

describe('DaysComponentComponent', () => {
  let component: DaysComponentComponent;
  let fixture: ComponentFixture<DaysComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DaysComponentComponent]
    });
    fixture = TestBed.createComponent(DaysComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
