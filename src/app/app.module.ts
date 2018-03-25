import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
//HttpCLient
import { HttpClientModule, HttpClient } from '@angular/common/http';
//Routing
import { RouterModule, Routes } from '@angular/router';
//forms
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavgeneralComponent } from './navgeneral/navgeneral.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { FooterComponent } from './footer/footer.component';
import { CreateAccountFormComponent } from './create-account-form/create-account-form.component';

export function HttpLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http);
}

const appRoutes: Routes =[
  //home
  {path: '', component: HomeComponent},
  {path: 'create-account', component: CreateAccountComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavgeneralComponent,
    CreateAccountComponent,
    FooterComponent,
    CreateAccountFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader:{
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
