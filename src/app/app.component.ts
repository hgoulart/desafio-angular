import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'viacredi-app';
  isMenuOpen: any;

  openMenu(isOpen: any){
    this.isMenuOpen = isOpen;
    console.log(isOpen)
  }
}
