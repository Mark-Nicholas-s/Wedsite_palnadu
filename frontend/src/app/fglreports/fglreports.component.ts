import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fglreports',
  templateUrl: './fglreports.component.html',
  styleUrls: ['./fglreports.component.css']
})
export class FglreportsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  email: string = '';
  DealerName: String = '';
  DealerAddress: String = '';
  Nameofpresonatinsp: String = '';
  addressofpresonatinsp: String = '';
  Dsonumber: String = '';
  Vattinnumber: string = '';
  StockRegister!: string;
  SalesRegister!: String;
  BillBooks !: String;
  WayBills !: String;
  Consumersbills !: String;
  submitLA !: String;
  Pricelist!: String;
  location!: String;
  x!: String;
  userfglobj!: object;
  form:Boolean=false;

}
