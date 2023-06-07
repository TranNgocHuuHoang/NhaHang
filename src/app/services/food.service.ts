
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { throwError as ObservableThrow } from 'rxjs';
import { of as ObservableOf} from 'rxjs';
import { Food } from '../model/food';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FoodService {
  private food! : Food[];


  constructor(private http : HttpClient) { }
   getFoods():Observable<Food[]>{
      return ObservableOf(this.food) ;
    }
    getFood(code : any):Observable<Food>{
      return this.http.get<Food>('api/food/'+ code)

    }
    createFood(food : Food){
      let foundFood = this.food.find(each => each.code === food.code);
      if (foundFood){
        return ObservableThrow({msg:'Food with code '+
      food.code + ' already exists'});
      }
      this.food.push(food);
      return ObservableOf({msg:'Food with code '+
      food.code + ' successfully created'});
    }
    toggleFavorite(food :Food) : Observable<Food>{
      let foundFood = this.food.find(each => each.code === food.code);
      if (foundFood) {
        foundFood.favorite = !foundFood.favorite;
        return ObservableOf(foundFood);
      }
      return ObservableOf();
    }
}

