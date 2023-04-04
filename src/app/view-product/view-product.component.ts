import { Component } from '@angular/core';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent {

  description = "This is a nice description of a product";
  brand = "Brand";
  price = 35.99;
  size: String;

  pickingSize(e : any){
    this.size = e.target.value
  }

  submitForm(){
    alert("You chose size " + this.size);
  }

}
