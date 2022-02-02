import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-status',
  templateUrl: './cart-status.component.html',
  styleUrls: ['./cart-status.component.css']
})
export class CartStatusComponent implements OnInit {

  totalPrice: number = 0.00;
  totalQuantity: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.updateCartStatus();
  }

  updateCartStatus() {
    
    /**
     * When new events are received make the assignments to update UI
     */

    this.cartService.totalPrice.subscribe(data => {
      return this.totalPrice = data;
    });

    this.cartService.totalQuantity.subscribe(data => {
      return this.totalQuantity = data;
    });

  }

}
