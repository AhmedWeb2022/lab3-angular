import { Component, OnInit, EventEmitter, Output , Input } from '@angular/core';

@Component({
  selector: 'app-regestiration',
  templateUrl: './regestiration.component.html',
  styleUrls: ['./regestiration.component.css'],
})
export class RegestirationComponent implements OnInit {
  constructor() {}
  sName = '';
  sAge: any;
  // regData = 'Data From Regestiration';
  @Output() myEvent = new EventEmitter();
   @Input() error = ""
  sendData() {
    let newStudent: { name: string; age: number } = {
      name: this.sName,
      age: Number(this.sAge),
    };
    // console.log(newStudent);
    this.myEvent.emit(newStudent);
  }
  ngOnInit(): void {}
}
