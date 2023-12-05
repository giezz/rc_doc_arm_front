import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcfComponent } from './icf.component';

describe('IcfComponent', () => {
  let component: IcfComponent;
  let fixture: ComponentFixture<IcfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IcfComponent]
    });
    fixture = TestBed.createComponent(IcfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
