import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBlockComponent } from './form-block.component';

describe('FormBlockComponent', () => {
  let component: FormBlockComponent;
  let fixture: ComponentFixture<FormBlockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormBlockComponent]
    });
    fixture = TestBed.createComponent(FormBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
