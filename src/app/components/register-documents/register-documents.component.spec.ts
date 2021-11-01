import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterDocumentsComponent } from './register-documents.component';

describe('RegisterDocumentsComponent', () => {
  let component: RegisterDocumentsComponent;
  let fixture: ComponentFixture<RegisterDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterDocumentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
