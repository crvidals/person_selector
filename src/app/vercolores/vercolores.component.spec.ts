import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VercoloresComponent } from './vercolores.component';

describe('VercoloresComponent', () => {
  let component: VercoloresComponent;
  let fixture: ComponentFixture<VercoloresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VercoloresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VercoloresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
