import{HttpClient,HttpResponse,HttpHeaders} from '@angular/common/http'
import{Injectable} from '@angular/core'
import { Observable } from 'rxjs-compat';
// import 'rxjs-compat/add/operator/map'
import 'rxjs-compat/add/operator/catch'
import { map, catchError, } from 'rxjs/operators';
import {book} from './book'

@Injectable()
export class bookService{
    constructor(private _httpService: HttpClient){}

    getAllBooks() {
         return this._httpService.get("http://localhost:8080/api/book");
    }
    private handleError(error : Response){
        return Observable.throw(error);
    }
    addBook(book:book){
        let body = JSON.stringify(book);
        let headers = new HttpHeaders({'Content-Type':'application/json'});
        if(book.id){
            return this._httpService.put("http://localhost:8080/api/book/"+book.id,body,{headers});    
        }
        return this._httpService.post("http://localhost:8080/api/book",body,{headers});
    }

    deleteBook(BookId : string){
        let headers = new HttpHeaders({'Content-Type':'application/json'});
        return this._httpService.delete(("http://localhost:8080/api/book/"+BookId),{headers});
    }
    getBookById(BookId : string): Observable<book> {
        return this._httpService.get<book>("http://localhost:8080/api/book/" + BookId);
   }

}
