export class Problem {
    

    constructor(private title: string, private description: string, private relevance: number) {}

    getTitle() {
        return this.title.slice();
    }

    getDescription() {
        return this.description.slice();
    }

    getRelevance() {
        return this.relevance;
    }

    setTitle(s: string) {
        this.title = s;
    }

    setDescription(s: string) {
        this.description = s;
    }

    setRelevance(n: number) {
        this.relevance = n;
    }
}