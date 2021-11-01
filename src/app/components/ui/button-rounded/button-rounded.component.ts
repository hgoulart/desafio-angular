import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-button-rounded',
  templateUrl: './button-rounded.component.html',
  styleUrls: ['./button-rounded.component.scss']
})
export class ButtonRoundedComponent implements OnInit {

  @Input() btnText: any;
  btn: any;

  constructor() { }

  ngOnInit(): void {
    this.btn = this.btnText;
  }

}
