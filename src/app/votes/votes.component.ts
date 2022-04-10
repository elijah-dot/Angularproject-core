import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
})
export class VotesComponent implements OnInit {
 upvotes:number = 0;
 downvotes :number = 0;
 mine(){
   this.upvotes++;

 }
 minedown(){
   this.downvotes++;
 }

  constructor() { }

  ngOnInit(): void {
  }

}
