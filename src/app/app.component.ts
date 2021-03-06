import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ecivil Supervision';

  constructor(translate: TranslateService){
    translate.setDefaultLang('en');
    
    if (translate.getBrowserLang() !== undefined) {
      translate.use(translate.getBrowserLang());
    } else {
      translate.use('en'); // Set your language here
    }
  }
}
