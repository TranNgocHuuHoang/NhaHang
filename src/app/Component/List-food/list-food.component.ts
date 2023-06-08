
import { Component, OnInit } from '@angular/core';
import { Food } from './../../model/food';
import { FoodService } from './../../services/food.service';

@Component({
  selector: 'app-list-food',
  templateUrl: './list-food.component.html',
  styleUrls: ['./list-food.component.css']
})
export class ListFoodComponent implements OnInit {
  food!: Food[];

  constructor(private foodService: FoodService) { }

  ngOnInit(): void {
    this.getFoods();
  }

  getFoods(): void {
    this.foodService.getFoods()
      .subscribe(foods => this.food = foods);
  }

  addFood(name: string, price: number): void {
    name = name.trim();
    if (!name) { return; }
    const newFood: Food = { name, price } as Food;
    this.foodService.addFood(newFood)
      .subscribe(food => {
        this.food.push(food);
      });
  }

  editFood(food: Food): void {
    this.foodService.updateFood(food)
      .subscribe(() => {
        const index = this.food.findIndex(f => f.id === food.id);
        this.food[index] = food;
      });
  }

  deleteFood(food: Food): void {
    this.food = this.food.filter(f => f !== food);
    this.foodService.deleteFood(food).subscribe();
  }
}


