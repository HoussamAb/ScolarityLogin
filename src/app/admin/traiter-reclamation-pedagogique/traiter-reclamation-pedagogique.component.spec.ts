import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraiterReclamationPedagogiqueComponent } from './traiter-reclamation-pedagogique.component';

describe('TraiterReclamationPedagogiqueComponent', () => {
  let component: TraiterReclamationPedagogiqueComponent;
  let fixture: ComponentFixture<TraiterReclamationPedagogiqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraiterReclamationPedagogiqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraiterReclamationPedagogiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
