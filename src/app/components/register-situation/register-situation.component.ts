import { Component, OnInit, Input } from '@angular/core';
import { faCreditCard, faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { IUser } from 'src/app/interface/iuser';

@Component({
  selector: 'app-register-situation',
  templateUrl: './register-situation.component.html',
  styleUrls: ['./register-situation.component.scss']
})
export class RegisterSituationComponent implements OnInit {

  @Input() userData: any;

  faUser = faUser;
  faCreditCard = faCreditCard;
  faCheckCircle = faCheckCircle;

  constructor() { }

  ngOnInit(): void {

  }

}
