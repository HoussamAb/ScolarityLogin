import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametrageRDVComponent } from './parametrage-rdv.component';

describe('ParametrageRDVComponent', () => {
  let component: ParametrageRDVComponent;
  let fixture: ComponentFixture<ParametrageRDVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParametrageRDVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParametrageRDVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
