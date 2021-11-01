import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSearchComponent } from './register-search.component';

describe('RegisterSearchComponent', () => {
  let component: RegisterSearchComponent;
  let fixture: ComponentFixture<RegisterSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
