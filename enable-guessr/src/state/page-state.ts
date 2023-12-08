import { writable, type Writable } from 'svelte/store';
import type { Page } from '../data/page.model';
import { pageData } from '../data/pages';

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

    private getNextPage(): Page {
        const dataLength = pageData.pages.length;

        const index = getRandomInt(0, dataLength - 1);
        return pageData.pages[index];
    }
}

export default new PageState();

function getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}