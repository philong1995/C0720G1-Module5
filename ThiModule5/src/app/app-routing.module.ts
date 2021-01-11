import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './component/home/home.component';
import {ListBookComponent} from './component/book/list-book/list-book.component';
import {EditBookComponent} from './component/book/edit-book/edit-book.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'book',
    component: ListBookComponent
  },
  {
    path: 'book/edit/:id',
    component: EditBookComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
