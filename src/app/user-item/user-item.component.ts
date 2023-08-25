// import { Component,OnInit,Input } from '@angular/core';

// @Component({
//   selector: 'app-user-item',
//   templateUrl: './user-item.component.html',
//   styleUrls: ['./user-item.component.css']
// })
// export class UserItemComponent implements OnInit {
//    name: string; // <-- added name property
  
//    constructor() {
//    this.name = 'Jose'; // set the name
//    }
  
//    ngOnInit() {
//    }
// }
import {
   Component,
   OnInit,
   Input 
   } from '@angular/core';
  
   @Component({
   selector: 'app-user-item',
   templateUrl: './user-item.component.html',
   styleUrls: ['./user-item.component.css']
   })
   export class UserItemComponent implements OnInit {
    @Input() name: string=""; 
  
     constructor() {
  
     }
  
    ngOnInit() {
    }
  
   }