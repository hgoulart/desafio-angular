import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button-default',
  templateUrl: './button-default.component.html',
  styleUrls: ['./button-default.component.scss']
})
export class ButtonDefaultComponent implements OnInit {

  @Input() btnText: any;
  btn: any;
  constructor() { }

  ngOnInit(): void {
    this.btn = this.btnText;
  }

}
