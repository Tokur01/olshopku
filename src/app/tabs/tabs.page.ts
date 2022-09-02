import { Component } from '@angular/core';
import { faHome,faShoppingBasket,faBox,faUserCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  home = faHome;
  shop = faShoppingBasket;
  box = faBox;
  user = faUserCircle;

  constructor(
  ){

  }

}
