import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewphotoComponent } from './viewphoto/viewphoto.component';
const myRote:Routes=[
  {
    path:"",
    component:ViewphotoComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ViewphotoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRote)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
