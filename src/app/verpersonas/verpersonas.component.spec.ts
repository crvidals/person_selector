import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerpersonasComponent } from './verpersonas.component';

describe('VerpersonasComponent', () => {
  let component: VerpersonasComponent;
  let fixture: ComponentFixture<VerpersonasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerpersonasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerpersonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
