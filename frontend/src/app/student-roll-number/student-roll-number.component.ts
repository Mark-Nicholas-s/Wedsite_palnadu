import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-roll-number',
  templateUrl: './student-roll-number.component.html',
  styleUrls: ['./student-roll-number.component.css']
})
export class StudentRollNumberComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  Getmarks(){
    console.log('Getmarks')
  }

}
