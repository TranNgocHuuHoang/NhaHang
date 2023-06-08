
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { FoodService } from '../food.service';
import { DetailFoodComponent } from './detail-food.component';

describe('DetailFoodComponent', () => {
  let component: DetailFoodComponent;
  let fixture: ComponentFixture<DetailFoodComponent>;
  let foodServiceSpy: jasmine.SpyObj<FoodService>;

  beforeEach(async () => {
    const foodService = jasmine.createSpyObj('FoodService', ['getFood']);

    await TestBed.configureTestingModule({
      declarations: [ DetailFoodComponent ],
      providers: [
        { provide: ActivatedRoute, useValue: { snapshot: { paramMap: { get: (param: string) => '1' } } } },
        { provide: FoodService, useValue: foodService }
      ]
    })
    .compileComponents();

    foodServiceSpy = TestBed.inject(FoodService) as jasmine.SpyObj<FoodService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailFoodComponent);
    });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
