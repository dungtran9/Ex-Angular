import { Component, OnInit } from '@angular/core';
import {IBook} from "../../ibook";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {BookService} from "../../book.service";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
 book:IBook;
 editForm:FormGroup
  constructor(private route: ActivatedRoute,
              private router: Router,
              private fb: FormBuilder,
              private bookService:BookService) { }
  id = +this.route.snapshot.paramMap.get('id');
  ngOnInit(): void {
    this.editForm=this.fb.group({
      title:['',[Validators.required]],
      author:['',[Validators.required]],
      description:['',[Validators.required]],
    })
    this.bookService.getBookById(this.id).subscribe(
      res => {
        this.book = res;
        this.editForm.patchValue(this.book);
      },
      error => {
        console.log(error);
        this.book = null;
      }
    );
  };
  get title(){
    return this.editForm.get('title')
  }
  get author(){
    return this.editForm.get('author')
  }
  get description(){
    return this.editForm.get('description')
  }
  update(){
    let book = this.editForm.value;
    this.bookService.update(book, this.id).subscribe(res => {
      console.log(res)
      this.router.navigate(['books'])
    })
  }
back(){
  this.router.navigate(['books']);
}

}
