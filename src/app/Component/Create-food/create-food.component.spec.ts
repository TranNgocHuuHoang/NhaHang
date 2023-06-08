/* import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFoodComponent } from './create-food.component';

describe('CreateFoodComponent', () => {
  let component: CreateFoodComponent;
  let fixture: ComponentFixture<CreateFoodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateFoodComponent]
    });
    fixture = TestBed.createComponent(CreateFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
}); */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { CreateFoodComponent } from './create-food.component';

describe('CreateFoodComponent', () => {
  let component: CreateFoodComponent;
  let fixture: ComponentFixture<CreateFoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateFoodComponent ],
      imports: [ ReactiveFormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a form', () => {
    expect(component.form).toBeDefined();
  });

  it('should be invalid by default', () => {
    expect(component.form.valid).toBeFalsy();
  });

  it('should be valid when all fields are filled in', () => {
    component.form.controls['name'].setValue('Pho');
    component.form.controls['price'].setValue(10000);
    expect(component.form.valid).toBeTruthy();
  });

  it('should call onSubmit() method when the form is submitted', () => {
    spyOn(component, 'onSubmit');
    let button = fixture.debugElement.nativeElement.querySelector('button[type="submit"]');
    button.click();
    expect(component.onSubmit).toHaveBeenCalled();
  });
});
