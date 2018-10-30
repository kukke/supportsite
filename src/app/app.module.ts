import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProblemListComponent } from './problem/problem-list/problem-list.component';
import { ProblemComponent } from './problem/problem.component';
import { SolutionComponent } from './solution/solution.component';
import { NavigationService } from './shared/navigation.service';
import { ProblemListContainerComponent } from './problem/problem-list-container/problem-list-container.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProblemListComponent,
    ProblemComponent,
    SolutionComponent,
    ProblemListContainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [NavigationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
