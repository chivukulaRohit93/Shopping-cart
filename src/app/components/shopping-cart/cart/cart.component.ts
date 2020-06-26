import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from 'src/app/models/cart-item'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems = [];
  cartTotal = 0;

  constructor(private msg:MessengerService,
    private cartService:CartService) { }

  ngOnInit() {
    
    this.handleSubcription();
    this.loadCartItems();


  }

  handleSubcription(){
    this.msg.getMsg().subscribe((product:Product) => {
      //console.log(product);

      // this.addProductToCart(product);
    this.loadCartItems();
 });
  }

  loadCartItems(){
     this.cartService.getCartitems().subscribe((items: CartItem[]) => {
          // console.log(items);
     this.cartItems = items;
     this.calcCartTotal();
     });
  }

  
  calcCartTotal(){
    this.cartTotal = 0;

  this.cartItems.forEach(items => {
   this.cartTotal += (items.qty * items.price);
});

  }

}
