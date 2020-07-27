import { Component, OnInit } from '@angular/core';
import {IBook} from "../../ibook";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {BookService} from "../../book.service";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  book:IBook;
  detailForm:FormGroup;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private fb: FormBuilder,
              private bookService:BookService) { }
  id = +this.route.snapshot.paramMap.get('id');
  ngOnInit(): void {
    this.detailForm=this.fb.group({
      title:[''],
      author:[''],
      description:[''],
    })
    this.bookService.getBookById(this.id).subscribe(
      res => {
        this.book = res;
        this.detailForm.patchValue(this.book);
      },
      error => {
        console.log(error);
        this.book = null;
      }
    );}
back(){
  this.router.navigate(['books'])
}
}
