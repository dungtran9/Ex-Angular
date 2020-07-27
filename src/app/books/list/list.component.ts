import {Component, OnInit} from '@angular/core';
import {IBook} from "../../ibook";
import {ActivatedRoute, Router} from "@angular/router";
import {BookService} from "../../book.service";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  title = 'Danh sách các cuốn sách';
  bookList: IBook[] = [];

  constructor(private router: Router,
              private route: ActivatedRoute,
              private bookService:BookService,
              private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.index()
  }
  index(){
    this.bookService.getAll().subscribe(respone => {
      this.bookList = respone;
    }, error => {
      console.log(error)
    }, () => {
      console.log('complete')
    })
  }

}
