import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-register-status',
  templateUrl: './register-status.component.html',
  styleUrls: ['./register-status.component.scss']
})
export class RegisterStatusComponent implements OnInit {

  @Input() step: any;

  constructor() { }

  ngOnInit(): void {
    

  }

}
