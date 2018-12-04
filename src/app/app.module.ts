import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ROUTES } from './app.routing'

import { AppComponent } from './app.component';
/*import { HeaderComponent } from './header/header.component';*/
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    /*HeaderComponent,*/
    HomeComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
