import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { DisplayArticlesComponent } from "./components/display-articles/display-articles.component";

@NgModule({
  declarations: [HeaderComponent, FooterComponent, DisplayArticlesComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [HeaderComponent, FooterComponent, DisplayArticlesComponent],
})
export class SharedModule {}
