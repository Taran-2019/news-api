import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable()
export class BitcoinService {
  
  constructor(private http: HttpClient) {
  }

  getdata() {
    return this.http.get('https://newsapi.org/v2/everything?q=bitcoin&from=2019-05-09&sortBy=publishedAt&apiKey=258b697f5cc94a29b58394059aeba890');
  }
}
