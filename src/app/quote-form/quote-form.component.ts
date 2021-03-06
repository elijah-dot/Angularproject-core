import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  newQuote = new Quote(0,"","",0,0,"",new Date());
  @Output() addQuote = new EventEmitter<Quote>();
  
  constructor() {}

  submitQuote() {
    this.addQuote.emit(this.newQuote);
  }



  ngOnInit(): void {
  }

}
