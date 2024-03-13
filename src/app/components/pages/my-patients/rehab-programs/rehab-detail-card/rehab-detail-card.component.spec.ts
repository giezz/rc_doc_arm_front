import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RehabDetailCardComponent } from './rehab-detail-card.component';

describe('RehabDetailCardComponent', () => {
  let component: RehabDetailCardComponent;
  let fixture: ComponentFixture<RehabDetailCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RehabDetailCardComponent]
    });
    fixture = TestBed.createComponent(RehabDetailCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
