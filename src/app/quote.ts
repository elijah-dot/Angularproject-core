export class Quote {
  public showdetails: boolean;
  id: number;
  name: string;
  quote: string;
  public upvotes: any;
  downvotes: number;
  description: string;
  constructor(
    id: number,
    name: string,
    quote: string,
    upvotes: any,
    downvotes: number,
    description: string
  ) {
    this.id = id;
    this.name = name;
    this.quote = quote;
    this.description = description;
    this.upvotes = upvotes;
    this.downvotes = downvotes;
    this.showdetails = false;
  }
}
