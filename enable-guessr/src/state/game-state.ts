import { pageData } from '../data/pages';

export class GameState {
    constructor() {
        this.initGameState();
    }

    public availablePageIndexes: number[] = [];

    public getNextPageIndex(): number {
        return this.getNextPage();
    }

    private initGameState() {
        const dataLength = pageData.pages.length;

        for (let i = 0; i < dataLength; i++) {
            this.availablePageIndexes.push(i);
        }
    }

    private getNextPage(): number {
        const dataLength = this.availablePageIndexes.length;
        const nextPageIndex = this.getRandomInt(0, dataLength - 1);
        const nextPageNumber = this.availablePageIndexes[nextPageIndex];

        this.availablePageIndexes.splice(nextPageIndex, 1)

        return nextPageNumber;
    }

    private getRandomInt(min: number, max: number): number {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

export default new GameState();

