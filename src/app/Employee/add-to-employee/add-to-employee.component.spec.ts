import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToEmployeeComponent } from './add-to-employee.component';

describe('AddToEmployeeComponent', () => {
  let component: AddToEmployeeComponent;
  let fixture: ComponentFixture<AddToEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddToEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
