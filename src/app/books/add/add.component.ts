import { Component, OnInit } from '@angular/core';
import {IBook} from "../../ibook";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {BookService} from "../../book.service";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
book:IBook[]=[];
addForm: FormGroup;
  constructor(private router:Router,
              private route:ActivatedRoute,
              private bookService:BookService,
              private fb:FormBuilder) { }

  ngOnInit(): void {
    this.addForm=this.fb.group({
      title:['',[Validators.required]],
      author:['',[Validators.required]],
      description:['',[Validators.required]],
    })
  }
  get title(){
    return this.addForm.get('title')
  }
  get author(){
    return this.addForm.get('author')
  }
  get description(){
    return this.addForm.get('description')
  }
 store(){
    let book=this.addForm.value;
    this.bookService.add(book).subscribe(res=>{
      console.log(res)
      this.router.navigate(['books'])
    })
 }
 back(){
   this.router.navigate(['books']);
 }
}
