import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {  SubProduct} from '../../services/products.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})

export class ProductCardComponent implements OnInit {

  @Input() productss:SubProduct[];
  @Input() ii:string;
  @Output() valueSelect = new EventEmitter<string>();;
  
  constructor() { 

    
  }

  getValueSelect(e:Event){
    let text:string = (e.target as HTMLInputElement).value;
    this.valueSelect.emit(text);
  }

  ngOnInit(): void {
  }

}
