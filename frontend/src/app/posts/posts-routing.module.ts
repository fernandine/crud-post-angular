import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostFormAddComponent } from './containers/post-form-add/post-form-add.component';
import { PostsComponent } from './containers/posts/posts.component';

const routes: Routes = [
  { path: '', component: PostsComponent },
  { path: 'new', component: PostFormAddComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
