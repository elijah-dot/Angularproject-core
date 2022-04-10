
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { QuoteComponent } from './quote/quote.component';
import { QuotesDetailsComponent } from './quotes-details/quotes-details.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { FormsModule } from '@angular/forms';
import { VotesComponent } from './votes/votes.component';
import { TimePipe } from './time.pipe';
import { HighDirective } from './high.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    QuoteComponent,
    QuotesDetailsComponent,
    QuoteFormComponent,
    VotesComponent,
    TimePipe,
    HighDirective,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
