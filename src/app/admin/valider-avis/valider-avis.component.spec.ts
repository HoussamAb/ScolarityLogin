import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValiderAvisComponent } from './valider-avis.component';

describe('ValiderAvisComponent', () => {
  let component: ValiderAvisComponent;
  let fixture: ComponentFixture<ValiderAvisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValiderAvisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValiderAvisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
