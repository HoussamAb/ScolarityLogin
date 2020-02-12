import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesseurDialogComponent } from './professeur-dialog.component';

describe('ProfesseurDialogComponent', () => {
  let component: ProfesseurDialogComponent;
  let fixture: ComponentFixture<ProfesseurDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfesseurDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfesseurDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
