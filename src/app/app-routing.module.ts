import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { BodyComponent } from './body/body.component';
import { OneIngredientComponent } from './one-ingredient/one-ingredient.component';
import { TwoIngredientComponent } from './two-ingredient/two-ingredient.component';

const routes: Routes = [
{path: '' , redirectTo:'body' ,pathMatch:'full' },
{path: 'body' , component: BodyComponent},
{path: 'one-ingredient' , component: OneIngredientComponent},
{path: 'two-ingredient' , component: TwoIngredientComponent},
{path: 'about-us' , component: AboutUsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
