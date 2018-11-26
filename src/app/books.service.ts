import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class BooksService {

  private allBooks = [{title: 'author'}];
  private userWishList = [];

  constructor() { }

  getWishList() {
    return this.userWishList;
  }

  getBookList() {
    //todo remove books from a userWishList
    return this.allBooks;
  }
}
