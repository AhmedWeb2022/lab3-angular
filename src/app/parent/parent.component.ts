import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent {
  // parentData = 'Parent Data From Parent';
  dataFromReg: { name: string; age: number }[] = [];
  errorMessage = '';
  getData(e: any) {
    if (e.name != '' && e.age != '' && e.age != 0) {
      if (e.age >= 20 && e.age <= 40) {
        if (e.name.length >= 3) {
          this.dataFromReg.push(e);
        }
      }
    } else {
      this.errorMessage = 'Enter Your Data First';
    }
    // console.log(this.dataFromReg);
  }
}
