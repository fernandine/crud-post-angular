import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../model/post';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private readonly API = 'api/posts';

  constructor(private httpClient: HttpClient) {}

  list() {
    return this.httpClient.get<Post[]>(this.API).pipe(tap());
  }

  save(record: Partial<Post>) {
    if (record._id) {
      return this.update(record);
    }
    return this.create(record);
  }

  private create(record: Partial<Post>) {
    return this.httpClient.post<Post>(this.API, record);
  }

  private update(record: Partial<Post>) {
    return this.httpClient.put<Post>(`${this.API}/${record._id}`, record);
  }

  remove(id: string) {
    return this.httpClient.delete(`${this.API}/${id}`);
  }
}
