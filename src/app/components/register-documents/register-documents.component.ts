import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-register-documents',
  templateUrl: './register-documents.component.html',
  styleUrls: ['./register-documents.component.scss']
})
export class RegisterDocumentsComponent implements OnInit {

  @Input() userData: any;

  constructor() { }

  ngOnInit(): void {
  }

}
