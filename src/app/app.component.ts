import { Component, Renderer2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  today: number = Date.now();

  public languageAr = "ar";
  public language = "en";

  constructor(
    public translate: TranslateService,
    private renderer: Renderer2
  ) {
    // reccuperer la langue stocker dans le navigateur
    if (localStorage.getItem("lang") != null)
      this.language = localStorage.getItem("lang");
    else
      translate.setDefaultLang(this.language);
    this.language == "en" ? this.userEnLanguage() : this.useArLanguage();
  }
  // Selectionner la langue
  onChange(deviceValue) {
    this.language = deviceValue;
    localStorage.setItem("lang", this.language);
    this.language == "en" ? this.userEnLanguage() : this.useArLanguage();
  }

  public useArLanguage() {
    this.renderer.setAttribute(document.querySelector('html'), 'dir', 'rtl');
    this.language = "ar"
    this.translate.use(this.language);
  }

  public userEnLanguage() {
    this.renderer.setAttribute(document.querySelector('html'), 'dir', 'ltr');
    this.language = "en"
    this.translate.use(this.language);
  }

}
