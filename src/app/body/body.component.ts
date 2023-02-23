import { Component } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {

  constructor(private router: Router) { }
  oneIngredientRoute=()=>{

    this.router.navigateByUrl('one-ingredient');

  }


  twoIngredientRoute=()=>{

    this.router.navigateByUrl('two-ingredient');

  }


}
