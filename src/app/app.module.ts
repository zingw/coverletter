import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoverLetterComponent } from './cover-letter/cover-letter.component';
import { AboutMeComponent } from './about-me/about-me.component';
import {BsDropdownModule} from "ngx-bootstrap/dropdown";

@NgModule({
  declarations: [
    AppComponent,
    CoverLetterComponent,
    AboutMeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
