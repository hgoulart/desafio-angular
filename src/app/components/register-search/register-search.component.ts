import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-search',
  templateUrl: './register-search.component.html',
  styleUrls: ['./register-search.component.scss']
})


export class RegisterSearchComponent implements OnInit {

  @Output() sendCpf = new EventEmitter<string>();
  cpfValue: any = '';
  validCpf = false;
  btn: any;

  constructor() { }

  ngOnInit(): void {
  }

  cpfValidate(cpf: any) {
    if (cpf.length < 11) {
      this.validCpf = false;
    } else {
      this.validCpf = true;
    }
  }

  // Envia o cpf para o componente pai sem pontos e traços
  onSubmit() {
    this.cpfValue = this.cpfValue.replace(/\./g, "").replace('-', '');
    this.sendCpf.emit(this.cpfValue);
    this.validCpf = false;
    this.cpfValue = '';
  }
}
