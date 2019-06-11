import { Component, OnInit } from "@angular/core";
import { BitcoinService } from "./bitcoin.service";

@Component({
  selector: 'bitcoin',
  templateUrl: './bitcoin.component.html',
  styleUrls:['./bitcoin.component.css']
})

export class BitcoinComponent{

data: {};
abc : [];

  
    

  

  constructor(private bservice: BitcoinService) { console.log('bitcoin component called');this.datacall();}

  datacall(){
    this.bservice.getdata().subscribe(res => {this.data = res['articles']
     console.log(this.data);

    });

  }


}
