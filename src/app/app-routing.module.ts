import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent} from "./books/list/list.component";
import {AddComponent} from "./books/add/add.component";
import {EditComponent} from "./books/edit/edit.component";
import {DeleteComponent} from "./books/delete/delete.component";
import {DetailComponent} from "./books/detail/detail.component";

const routes: Routes = [
  {
    path:'books',
    component : ListComponent
  },
  {
    path :'books/add',
    component : AddComponent
  },
  {
    path :'edit/:id',
    component: EditComponent
  },
  {
    path:'delete/:id',
    component: DeleteComponent
  },
  {
    path:'detail/:id',
    component: DetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
