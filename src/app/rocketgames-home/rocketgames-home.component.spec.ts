import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketgamesHomeComponent } from './rocketgames-home.component';

describe('RocketgamesHomeComponent', () => {
  let component: RocketgamesHomeComponent;
  let fixture: ComponentFixture<RocketgamesHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RocketgamesHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RocketgamesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
