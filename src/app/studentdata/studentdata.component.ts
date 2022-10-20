import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-studentdata',
  templateUrl: './studentdata.component.html',
  styleUrls: ['./studentdata.component.css'],
})
export class StudentdataComponent implements OnInit {
  @Input() dataFromParent: { name: string; age: number }[] = [];

  constructor() {
    // console.log(this.dataFromParent);
  }

  ngOnInit(): void {}
}
