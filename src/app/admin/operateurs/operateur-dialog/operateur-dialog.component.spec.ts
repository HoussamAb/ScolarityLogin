import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperateurDialogComponent } from './operateur-dialog.component';

describe('OperateurDialogComponent', () => {
  let component: OperateurDialogComponent;
  let fixture: ComponentFixture<OperateurDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperateurDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperateurDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
