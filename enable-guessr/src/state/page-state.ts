import { writable, type Writable } from 'svelte/store';
import type { Page } from '../data/page.model';
import { pageData } from '../data/pages';
import gameState from './game-state';


export class PageState {
    constructor() {
        this.currentPage = writable(this.getNextPage());
    }

    public currentPage: Writable<Page>;
    public visitedPageIndexes: number[] = [];

    public nextPage(): void {
        const nextPage = this.getNextPage();
        this.currentPage.set(nextPage);
    }

    private getNextPage() {
        const pageIndex = gameState.getNextPageIndex();
        return pageData.pages[pageIndex];
    }
}

export default new PageState();

