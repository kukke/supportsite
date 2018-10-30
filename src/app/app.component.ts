import { Component, OnInit } from '@angular/core';
import { NavigationService } from './shared/navigation.service';
import { EPage } from './shared/page.enum';
import { ProblemService } from './problem/problem.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProblemService]
})
export class AppComponent implements OnInit {
  page = EPage;
  title = 'app';

  constructor(private navService: NavigationService){}

  ngOnInit() {
    // this.navService.pageChanged.subscribe(f => );
  }

}
