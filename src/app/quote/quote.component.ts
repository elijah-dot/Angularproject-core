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
    new Quote(1,'Nelson Mandela','The greatest glory in living lies not in never falling, but in rising every time we fall.', 0,0, "",new Date(2010,4,20)),
    new Quote(2,'walt disney','The way to get started is to quit talking and begin doing.', 0,0, "",new Date(2020,9,10)),
    new Quote(3,'Steve Jobs',"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.", 0,0,"",new Date(2021,2,1)),
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

 
  


