import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSkillToComponent } from './add-skill-to.component';

describe('AddSkillToComponent', () => {
  let component: AddSkillToComponent;
  let fixture: ComponentFixture<AddSkillToComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSkillToComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSkillToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
