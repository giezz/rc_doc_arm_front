import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RehabProgramResultsComponent } from './rehab-program-results.component';

describe('RehabProgramResultsComponent', () => {
  let component: RehabProgramResultsComponent;
  let fixture: ComponentFixture<RehabProgramResultsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RehabProgramResultsComponent]
    });
    fixture = TestBed.createComponent(RehabProgramResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
