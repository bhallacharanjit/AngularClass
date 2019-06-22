import { Component } from '@angular/core';
import {SimpleServiceService} from './simple-service.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Charanjit';
  books = [{'name':'book1','author':"author1",'price':'8.95'},{'name':'book2','author':"author2",'price':'8.95'},{'name':'book3','author':"author3",'price':'8.95'}];
  showText = false;
  result = "Your Result will be shown here!"
  todaydate = new Date();
  months = ["Jan", "Feb", "Mar", "April", "May", "Jun",
             "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
  numberPower = 5;
  sumFromService = 0;


  constructor(simpleservice : SimpleServiceService) {
    this.sumFromService = simpleservice.calculatesum(4,5);
    simpleservice.callGetService();
  }


  calculateSum(a,b) {
    this.result = a+b;
  }


} 
