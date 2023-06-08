import { FoodService } from './../../services/food.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Food } from './../../model/food';

@Component({
  selector: 'app-detail-food',
  templateUrl: './detail-food.component.html',
  styleUrls: ['./detail-food.component.css']
})
export class DetailFoodComponent implements OnInit {
  food: Food;

  constructor(
    private route: ActivatedRoute,
    private foodService: FoodService
  ) {}

  ngOnInit(): void {
    const idString = this.route.snapshot.paramMap.get('id');
    if (idString !== null) {
       const id = +idString;
       this.foodService.getFood(id).subscribe(food =>
       {
          this.food = food;
       });
      }
  }
}
