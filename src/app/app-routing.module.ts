import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { FoodComponent } from './Component/Food/food.component';
import { ListFoodComponent } from './Component/List-food/list-food.component';


const appRoutes: Routes = [
  { path:'',redirectTo:'user/login', pathMatch:'full'},
  { path:'user/login', component: LoginComponent},
  { path:'user/register', component: RegisterComponent},
  { path:'**', redirectTo:'user/register'},
  { path:'Food', component: FoodComponent},
  { path:'ListFood', component: ListFoodComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
