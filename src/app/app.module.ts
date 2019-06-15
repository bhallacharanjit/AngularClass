import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MySecondPageComponent } from './my-second-page/my-second-page.component';
import { MyCustomDirectiveDirective } from './my-custom-directive.directive'; 
import { PowerPipe } from './app.power';

@NgModule({
  declarations: [
    AppComponent,
    MySecondPageComponent,
    MyCustomDirectiveDirective,
    PowerPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
