import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicTestComponent } from './dynamic-test.component';

describe('DynamicTestComponent', () => {
  let component: DynamicTestComponent;
  let fixture: ComponentFixture<DynamicTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
