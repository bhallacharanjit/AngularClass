import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MySecondPageComponent } from './my-second-page/my-second-page.component';
import { MyCustomDirectiveDirective } from './my-custom-directive.directive'; 
import { PowerPipe } from './app.power';
import {SimpleServiceService } from './simple-service.service';

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
    FormsModule,
    HttpModule
  ],
  providers: [SimpleServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
