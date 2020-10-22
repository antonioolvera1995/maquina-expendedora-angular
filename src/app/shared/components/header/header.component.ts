import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  activ:boolean = false;
  links:string[];
  constructor(private router: Router ) { 

  }


  ngOnInit(): void {
   
    this.links = ['Products', 'Purchased Products', 'Recharge Card']

  }


  go(id2:string):string{
    let id:string = id2.toLocaleLowerCase();
    id = id.replace(' ', '-');
    if (id === 'products') {
      id = '';
    } 
    return id;
  }

}
