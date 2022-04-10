import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'quotes-details',
  templateUrl: './quotes-details.component.html',
  styleUrls: ['./quotes-details.component.css']
})
export class QuotesDetailsComponent implements OnInit {
  @Input()quote:Quote;
  
  @Output()
  ifSure=new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {
  }
  DeleteQuote(complete:boolean){
    this.ifSure.emit(complete);
  }
 
  

}
