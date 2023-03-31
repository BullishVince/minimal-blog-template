import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import {
  WP_REST_API_Attachments,
  WP_REST_API_Categories,
  WP_REST_API_Comments,
  WP_REST_API_Post,
  WP_REST_API_Posts,
  WP_REST_API_Search_Results,
  WP_REST_API_Tags,
  WP_REST_API_User,
  WP_REST_API_Users,
} from "wp-types";

@Injectable({
  providedIn: "root",
})
export class WordpressService {
  constructor(private http: HttpClient) {}

  getPosts(): Observable<WP_REST_API_Posts> {
    return this.http.get(
      `${environment.apiConfig.baseUrl}wp/v2/posts`
    ) as Observable<WP_REST_API_Posts>;
  }

  getPostById(id: string): any {
    return this.http.get(
      `${environment.apiConfig.baseUrl}wp/v2/posts/${id}`
    ) as Observable<WP_REST_API_Post>;
  }

  getCategories(): Observable<WP_REST_API_Categories> {
    return this.http.get(
      `${environment.apiConfig.baseUrl}wp/v2/categories`
    ) as Observable<WP_REST_API_Categories>;
  }

  getTags(): any {
    return this.http.get(
      `${environment.apiConfig.baseUrl}wp/v2/tags`
    ) as Observable<WP_REST_API_Tags>;
  }

  getComments(): any {
    return this.http.get(
      `${environment.apiConfig.baseUrl}wp/v2/comments`
    ) as Observable<WP_REST_API_Comments>;
  }

  getPages(): any {
    return this.http.get(
      `${environment.apiConfig.baseUrl}wp/v2/pages`
    ) as Observable<WP_REST_API_Posts>;
  }

  getMedias(): any {
    return this.http.get(
      `${environment.apiConfig.baseUrl}wp/v2/media`
    ) as Observable<WP_REST_API_Attachments>;
  }

  search(searchString: string): any {
    return this.http.get(
      `${environment.apiConfig.baseUrl}wp/v2/search?search=${searchString}`
    ) as Observable<WP_REST_API_Search_Results>;
  }

  getUsers(): any {
    return this.http.get(
      `${environment.apiConfig.baseUrl}wp/v2/users`
    ) as Observable<WP_REST_API_Users>;
  }

  getUserById(id: string): any {
    return this.http.get(
      `${environment.apiConfig.baseUrl}wp/v2/users/${id}`
    ) as Observable<WP_REST_API_User>;
  }
}
