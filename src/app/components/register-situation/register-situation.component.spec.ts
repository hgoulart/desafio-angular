import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSituationComponent } from './register-situation.component';

describe('RegisterSituationComponent', () => {
  let component: RegisterSituationComponent;
  let fixture: ComponentFixture<RegisterSituationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterSituationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterSituationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
