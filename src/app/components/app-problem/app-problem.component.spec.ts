import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppProblemComponent } from './app-problem.component';

describe('AppProblemComponent', () => {
  let component: AppProblemComponent;
  let fixture: ComponentFixture<AppProblemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppProblemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppProblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
