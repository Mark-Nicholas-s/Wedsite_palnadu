import { Component, OnInit } from '@angular/core';
import { UserfglService} from '../userfgl.service';

@Component({
  selector: 'app-fglform',
  templateUrl: './fglform.component.html',
  styleUrls: ['./fglform.component.css']
})
export class FGLformComponent implements OnInit {

  constructor(private userfglservice: UserfglService,) { }

  ngOnInit(): void {
  }
  email: string = '';
  DealerName: String = '';
  DealerAddress: String = '';
  Nameofpresonatinsp: String = '';
  addressofpresonatinsp: String = '';
  Dsonumber: string = '';
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
  // userfglobj = {
  //   DealerName: this.DealerName,
  //   AddressBusinessPremises: this.DealerAddress,
  //   NameOfThPersoneAtInspection : this.Nameofpresonatinsp,
  //   AddressOfThePersonAtInspection: this.addressofpresonatinsp,
  //   DsoLicenseNumber: this.Dsonumber,
  //   VatTinNumber: this.Vattinnumber,
  //   PriceListAndStockBoard: this.Pricelist,
  //   StockRegister: this.StockRegister,
  //   SalesRegsiter: this.SalesRegister,
  //   BillBook: this.BillBooks,
  //   WayBills: this.WayBills,
  //   DidBillsIssued: this.BillBooks,
  //   CFormsSubmittion: this.submitLA,
  //   Email: 'ask@gmail.com'
  // };

  yesorno(x: String) {
    if (x == "yes") {
      x = "1";
    }
    else {
      x = "0";
    }
    console.log(x);
  }


  print() {
    console.log(this.DealerName);
    console.log(this.DealerAddress);
    console.log(this.Nameofpresonatinsp);
    console.log(this.Dsonumber);
    console.log(this.Vattinnumber);
    this.yesorno(this.Pricelist);
    this.yesorno(this.location);
    this.yesorno(this.StockRegister);
    this.yesorno(this.SalesRegister)
    this.yesorno(this.BillBooks)
    this.yesorno(this.WayBills)
    this.yesorno(this.Consumersbills)
    this.yesorno(this.submitLA)

    this.userfglobj = {
      DealerName: this.DealerName,
      AddressBusinessPremises: this.DealerAddress,
      NameOfThPersoneAtInspection : this.Nameofpresonatinsp,
      AddressOfThePersonAtInspection: this.addressofpresonatinsp,
      DsoLicenseNumber: this.Dsonumber,
      VatTinNumber: this.Vattinnumber,
      PriceListAndStockBoard: this.Pricelist,
      StockRegister: this.StockRegister,
      SalesRegsiter: this.SalesRegister,
      BillBook: this.BillBooks,
      WayBills: this.WayBills,
      DidBillsIssued: this.BillBooks,
      CFormsSubmittion: this.submitLA,
      Email: this.email
    };
    console.log("Thisobject",this.userfglobj);
    
    this.userfglservice.postFglForm(this.userfglobj).subscribe(  (data) => { 
      if(data){
        console.log("data = ", data);
        this.form = true ;
      } else {
        console.log("data is not retrieving");
        
      }
    }, (err) => {
      console.log("err in postFglForm()= ", err);
      
    });
  }

  


}
