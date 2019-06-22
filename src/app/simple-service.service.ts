import { Injectable } from '@angular/core';
import { Http} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class SimpleServiceService {


  httpModule:Http;

  constructor(httpModule:Http) { 
    this.httpModule = httpModule;
    }


    callGetService() {
      this.httpModule.get('http://jsonplaceholder.typicode.com/users')
      .subscribe(data => { console.log(data)
        var jsonArr = JSON.parse(data.toString());
        console.log(jsonArr);
      });
    }


  calculatesum(a:number, b:number) {
    return a+b;
  }





}
