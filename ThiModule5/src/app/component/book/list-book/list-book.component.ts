import { Component, OnInit } from '@angular/core';
import {IBook} from '../../../model/IBook';
import {BookService} from '../../../service/book.service';
import {CustomerService} from '../../../service/customer.service';
import {ICustomer} from '../../../model/ICustomer';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.scss']
})
export class ListBookComponent implements OnInit {

  bookList: IBook[];
  idBook: number;
  book: string;


  constructor(
    private bookService: BookService,
    private customerService: CustomerService
  ) { }

  ngOnInit(): void {
    this.bookService.getAll().subscribe(data =>{
      this.bookList = data;
    });
  }

  getId(id: number) {
    this.idBook = id;
  }

  delete() {
    this.bookService.delete(this.idBook).subscribe(data => {
      this.ngOnInit();
    });
  }

  search (keyword: string)  {
    this.bookService.searchAll(keyword.toString()).subscribe((data: IBook[]) =>{
      this.bookList = data;
    });
  }

}
