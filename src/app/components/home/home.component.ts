import { Component, OnInit } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
import { Observable } from "rxjs";
import { WordpressService } from "src/shared/services/wordpress.service";
import { WP_REST_API_Posts } from "wp-types";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  posts: Observable<WP_REST_API_Posts> | undefined;

  constructor(
    private wp: WordpressService,
    private title: Title,
    private meta: Meta
  ) {}

  ngOnInit(): void {
    const title = "BullishLife";
    const description = "Description goes here";

    this.title.setTitle(title);
    this.meta.addTags([
      {
        name: "description",
        content: description,
      },
      {
        name: "og:title",
        content: title,
      },
      {
        name: "og:description",
        content: description,
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
    ]);
  }

  getPosts(): void {
    this.posts = this.wp.getPosts();
  }
}
