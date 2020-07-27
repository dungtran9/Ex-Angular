import { Component, OnInit } from '@angular/core';
import {IBook} from "../../ibook";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {BookService} from "../../book.service";

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  book:IBook;
  deleteForm:FormGroup;
  booksList: IBook[] = [];
  constructor(private route: ActivatedRoute,
              private router: Router,
              private fb: FormBuilder,
              private bookService:BookService) { }
  id = +this.route.snapshot.paramMap.get('id');
  ngOnInit(): void {
    this.deleteForm=this.fb.group({
      title:[''],
      author:[''],
      description:[''],
    })
    this.bookService.getBookById(this.id).subscribe(
      res => {
        this.book = res;
        this.deleteForm.patchValue(this.book);
      },
      error => {
        console.log(error);
        this.book = null;
      }
    );
  };
  delete() {
    const book = this.booksList;
    if (confirm('Bạn chắc chắn muốn xóa ?'))
      this.bookService.delete(this.book.id).subscribe(res => {

        this.router.navigate(['books'])
      })
  }
  back(){
    this.router.navigate(['books'])
  }
}
