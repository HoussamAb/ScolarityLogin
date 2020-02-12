import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraiterReclamationNoteComponent } from './traiter-reclamation-note.component';

describe('TraiterReclamationNoteComponent', () => {
  let component: TraiterReclamationNoteComponent;
  let fixture: ComponentFixture<TraiterReclamationNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraiterReclamationNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraiterReclamationNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
