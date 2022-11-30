import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CoverLetterComponent} from './cover-letter/cover-letter.component';
import {AboutMeComponent} from './about-me/about-me.component';
import {BsDropdownModule} from "ngx-bootstrap/dropdown";
import {FormsModule} from "@angular/forms";
import {SampleProjectModule} from "./sampleproject/sample-project.module";
import {ToastrModule} from "ngx-toastr";

@NgModule({
  declarations: [
    AppComponent,
    CoverLetterComponent,
    AboutMeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule,
    FormsModule,
    SampleProjectModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
