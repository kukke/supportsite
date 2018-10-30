import { EPage } from "./page.enum";
import { EventEmitter } from "@angular/core";

export class NavigationService {
    // page: EPage;
    selectedPage: EPage = EPage.Home;
    pageChanged: EventEmitter<EPage> = new EventEmitter<EPage>();

    changePage(page: EPage) {
        this.selectedPage = page;
        this.pageChanged.emit(page);
    }
}