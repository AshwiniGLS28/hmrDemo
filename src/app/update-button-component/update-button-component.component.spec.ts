import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateButtonComponentComponent } from './update-button-component.component';

describe('UpdateButtonComponentComponent', () => {
  let component: UpdateButtonComponentComponent;
  let fixture: ComponentFixture<UpdateButtonComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateButtonComponentComponent]
    });
    fixture = TestBed.createComponent(UpdateButtonComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
