import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepUserNameComponent } from './step-user-name.component';

describe('StepUserNameComponent', () => {
  let component: StepUserNameComponent;
  let fixture: ComponentFixture<StepUserNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepUserNameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepUserNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
