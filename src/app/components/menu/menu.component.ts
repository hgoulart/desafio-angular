import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faBars, faSearch, faSlidersH,faLandmark,faHome } from '@fortawesome/free-solid-svg-icons';
import { faStar, faCommentAlt } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Output() isMenuOpen = new EventEmitter<boolean>();

  faBars = faBars;
  faSearch = faSearch;
  faStar = faStar;
  faCommentAlt = faCommentAlt;
  faSlidersH = faSlidersH;
  faLandmark = faLandmark;
  faHome = faHome;
  isOpen = false;

  constructor() { }

  ngOnInit(): void {
  }

  openMenu(){
    this.isOpen = !this.isOpen;

    this.isMenuOpen.emit(this.isOpen);

    console.log(this.isOpen)
  }
}
