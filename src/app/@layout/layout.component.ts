import { Component, OnInit } from '@angular/core';
import { MENU_ITEMS } from './menu-items';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  menu = MENU_ITEMS;

  constructor() { }

  ngOnInit(): void {
  }

}
