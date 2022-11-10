import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketgamesContactoComponent } from './rocketgames-contacto.component';

describe('RocketgamesContactoComponent', () => {
  let component: RocketgamesContactoComponent;
  let fixture: ComponentFixture<RocketgamesContactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RocketgamesContactoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RocketgamesContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
