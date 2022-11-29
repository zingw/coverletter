import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CoverLetterComponent} from "./cover-letter/cover-letter.component";
import {AboutMeComponent} from "./about-me/about-me.component";

const routes: Routes = [
  {
    path : '',
    component : CoverLetterComponent
  },
  {
    path : 'about',
    component : AboutMeComponent
  },
  {
      path : 'sample-project',
    loadChildren: () => import(`./sampleproject/sample-project-routing.module`).then(m => m.SampleProjectRoutingModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
