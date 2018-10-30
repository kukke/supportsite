import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemListContainerComponent } from './problem-list-container.component';

describe('ProblemListContainerComponent', () => {
  let component: ProblemListContainerComponent;
  let fixture: ComponentFixture<ProblemListContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProblemListContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
