import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilieresDialogComponent } from './filieres-dialog.component';

describe('FilieresDialogComponent', () => {
  let component: FilieresDialogComponent;
  let fixture: ComponentFixture<FilieresDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilieresDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilieresDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
