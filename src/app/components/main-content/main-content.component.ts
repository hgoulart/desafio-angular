import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  btnDefault = {
    text: 'Iniciar nova admissão',
    disabled: false
  }
  btnRounded = {
    text: 'Dicas paraadmissão'
  }
  constructor() { }

  ngOnInit(): void {
  }

  NewAdmission(): void{
    console.log("Nova admissão")
  }

  admissionTips(): void{
    console.log("Dicas admissão")
  }

}
