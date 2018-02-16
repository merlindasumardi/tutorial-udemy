import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
  isEmpty = true;
  username= 'linda';
  isHide =  false;
  logs: any = [];
  num = 1;

  constructor() { }

  ngOnInit() {
    if (this.username !== '') {
      this.isEmpty = false;
      }else { this.isEmpty = true; }
  }

  onClickButton() {
    this.isHide = !this.isHide;
    this.logs.push(this.num++);
    console.log(this.logs);

}

}
