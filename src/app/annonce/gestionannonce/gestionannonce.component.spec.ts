import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionannonceComponent } from './gestionannonce.component';

describe('GestionannonceComponent', () => {
  let component: GestionannonceComponent;
  let fixture: ComponentFixture<GestionannonceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionannonceComponent]
    });
    fixture = TestBed.createComponent(GestionannonceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
