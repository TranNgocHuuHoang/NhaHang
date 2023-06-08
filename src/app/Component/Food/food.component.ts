import { Component, OnInit } from '@angular/core';
import { FoodService } from './../../services/food.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {
  foods: any[] = [];
  newFood = {
    name: '',
    price: 0
  };

  constructor(private foodService: FoodService) { }

  ngOnInit(): void {
    this.foods = this.foodService.getFoods();
  }

  addFood(): void {
    this.foods.push(this.newFood);
    this.newFood = {
      name: '',
      price: 0
    };
  }
}
