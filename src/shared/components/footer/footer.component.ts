import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-footer",
  template: `
    <!-- Footer-->
    <footer class="py-5 bg-dark">
      <div class="container">
        <p class="m-0 text-center text-white">
          Copyright &copy; <a href="/">{{ appTitle }}</a> 2023
        </p>
      </div>
    </footer>
  `,
  styles: [],
})
export class FooterComponent implements OnInit {
  readonly appTitle = document.title;

  constructor() {}

  ngOnInit(): void {}
}
