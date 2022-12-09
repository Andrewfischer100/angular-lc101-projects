import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   chores = ['Buy groceries', 'hit the gym'];
   todoTitles = ["Yesterday's Chores", "Today's Chores"];

   constructor() { }

   ngOnInit() {
   }

}
