import { Quote } from './../quote';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  clicks = 0
  quotes: Quote[] = [
    new Quote(1,'elijah','first quote ', 0,0, "",new Date(2010,4,20)),
    new Quote(2,'elijah','second quote', 0,0, "",new Date(2020,9,10)),
    new Quote(3,'elijah','third quote', 0,0,"",new Date(2021,2,1)),
  ];
  constructor() {}
  completequote(ifSure: any, index: number) {
    if (ifSure) {
      this.quotes.splice(index, 1);
    }
  }

  ngOnInit(): void {}
  toggleDetails(index: any) {
    this.quotes[index].showdetails = !this.quotes[index].showdetails;
  }
  deleteTheQuote(ifSure: any, index: number) {
    if (ifSure) {
      let toDelete = confirm(
        `Are you sure you want to delete ${this.quotes[index].description}?`
      );
      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }
  addNewQuote(quote:any){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    this.quotes.push(quote)
  }
  upvotes: number = 1
  mine(index:number){
    this.quotes[index].upvotes= this.clicks++
  //   this.quotes[index].upvotes = !this.quotes[index].upvotes
  //  return this.quotes[index].upvotes+this.upvotes
  }
  
}

 
  


