class Book {
    title: string;
    author: string;
    price: number;
    publicationDate: Date;


    constructor(t: string, a: string, p: number, d: Date) {
        this.title = t;
        this.author = a;
        this.price = p;
        this.publicationDate = d;
        
    }

    getSummary(): string {
        return `${this.title} by ${this.author}, published on ${this.publicationDate.toDateString()}. Price: $${this.price}`;
    }
}

let book: Book = new Book("The Great Gatsby", "F. Scott Fitzgerald", 10.99, new Date("1925-04-10"));
console.log(book.getSummary());