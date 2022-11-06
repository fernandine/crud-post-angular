import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';

import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-post-form-add',
  templateUrl: './post-form-add.component.html',
  styleUrls: ['./post-form-add.component.scss']
})
export class PostFormAddComponent implements OnInit {

  form = this.formBuilder.group({
    _id: [''],
    title: [''],
    body: ['']
  });

  constructor(private formBuilder: NonNullableFormBuilder,
    private service: PostsService,
    private snackbar: MatSnackBar,
    private location: Location) {
   // this.form
   }

  ngOnInit(): void {
  }

  onSubmit() {
    this.service.save(this.form.value).subscribe(
      () => this.onSuccess(),
      () => this.onError());
  }

  private onError() {
    this.snackbar.open('Erro ao salvar postagem', '', { duration: 4000 });
  }

  //Cancela e volta pra página inicial
  onCancel() {
    this.location.back();
  }

  private onSuccess() {
    this.snackbar.open('Postagem salva com sucesso!', '', { duration: 4000 });
    this.onCancel();
  }

}
