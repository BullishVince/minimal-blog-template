import { Injectable } from "@angular/core";
import { WordpressService } from "./wordpress.service";

@Injectable({
  providedIn: "root",
})
export class PostsService {
  constructor(wp: WordpressService) {}
}
