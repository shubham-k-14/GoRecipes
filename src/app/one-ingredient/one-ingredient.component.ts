import { Component } from '@angular/core';
import { FormBuilder,FormGroup,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-one-ingredient',
  templateUrl: './one-ingredient.component.html',
  styleUrls: ['./one-ingredient.component.css']
})
export class OneIngredientComponent {


 isSubmitted=false;
 ingredients:any=["milk","ghee","pav","sugar"];
 
 
  constructor(private fb:FormBuilder) {
    
  }

  itemForm = this.fb.group({
    itemName:['',[Validators.required]],
  })
 

  changeItem(e: any) {
    this.itemName?.setValue(e.target.value, {
      onlySelf: true,
    });
  }

  get itemName() {
    return this.itemForm.get('itemName');
  }
  









  


  

  submit(): void {
    console.log(this.itemForm);
    console.log(this.itemForm.value)
    const itemValue=this.itemForm.value.itemName;
    console.log(itemValue);
    
  //   this.isSubmitted = true;
  //   if (!this.itemForm.valid) {
  //     false;
  //   } else {
  //     console.log(JSON.stringify(this.itemForm.value));
  //   }
  }

}
