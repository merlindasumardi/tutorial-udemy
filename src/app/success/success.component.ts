import { Component, OnInit } from '@angular/core';

@Component({
selector: 'app-success',
templateUrl: './success.component.html',
styles: [`
p{
    background-color: green;
}
`]
})

export class SuccessComponent implements OnInit {
    isEmpty = true;
    username: any;


    constructor() { }

    ngOnInit() {
        if (this.username !== '') {
        this.isEmpty = false;
        }else { this.isEmpty = true; }
    }

    onClickButton() {
        this.username = '';
    }
}
