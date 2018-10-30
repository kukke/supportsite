import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../shared/navigation.service';
import { EPage } from '../shared/page.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  page = EPage;

  constructor(private navService: NavigationService) { }

  ngOnInit() {
  }

  onClickPage(page: EPage) {    
    // this.navService.pageChanged.emit(page);
    this.navService.changePage(page);
  }

}
