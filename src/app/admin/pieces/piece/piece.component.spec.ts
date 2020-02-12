import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PieceComponent } from './piece.component';


describe('DialogComponent', () => {
  let component: PieceComponent;
  let fixture: ComponentFixture<PieceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PieceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PieceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
