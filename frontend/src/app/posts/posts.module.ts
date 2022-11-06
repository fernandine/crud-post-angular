import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

import { SharedModule } from '../shared/shared.module';
import { PostFormAddComponent } from './containers/post-form-add/post-form-add.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './containers/posts/posts.component';



@NgModule({
  declarations: [
    PostsComponent,
    PostFormAddComponent,
    PostListComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    MatTableModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    SharedModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatSnackBarModule
  ]
})
export class PostsModule { }
