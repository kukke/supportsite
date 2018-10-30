import { Problem } from "./problem.model";

export class ProblemService {
    private problems: Problem[] = [
        new Problem('Sales Commit will not start.', 'Everytime I run Sales Commit from the desktop, it will not start. What can I do?', 5),
        new Problem('Cockpit loading forever..', 'When my clients open the cockpit, it continues loading forever. What can I do?', 5)
    ];

    getProblems() {
        return this.problems.slice();
    }
}