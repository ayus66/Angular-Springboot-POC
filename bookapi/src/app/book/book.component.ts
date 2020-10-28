import {Component,OnInit} from '@angular/core';
import{book} from './book' ;
import{bookService} from './book.service'

@Component({
    selector : 'app-book',
    templateUrl : './book.component.html',
    styleUrls : ['./book.component.css']
})

export class bookComponent implements OnInit{

    books : Object;
    Book = new book();
    constructor(private _BookServices: bookService){}

    ngOnInit():void{
        this.getBook();
    }
    getBook() : void{
        this._BookServices.getAllBooks().subscribe((bookData) =>
         {this.books = bookData,console.log(bookData)},
        (error) =>
        {console.log(error);}
        );
    }
    addBook():void{
        this._BookServices.addBook(this.Book).subscribe((Response) =>
        { 
            console.log(Response);
            this.reset();
            this.getBook();
        },
       (error) =>
       {console.log(error);}
       );
    }
    deleteBook(bookId:string){
        this._BookServices.deleteBook(bookId).subscribe((Response) =>
        {
            this.getBook();
            console.log(Response);
        },
       (error) =>
        {
           console.log(error);
        }
       );
    }
    getBookById(bookId:string){
        this._BookServices.getBookById(bookId).subscribe((bookData) =>
            {
                this.Book = bookData;
                this.getBook();
                console.log(bookData)
            },
            (error) =>
            {
                console.log(error);
            }            
        );
    }
    private reset(){
        this.Book.id = null;
        this.Book.author = null;
        this.Book.title = null;
    }
}