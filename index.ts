import { Solution } from "./solution";

const solution = new Solution();
console.log(solution.solve("()"));
console.log(solution.solve("(("));
console.log(solution.solve(")("));
console.log(solution.solve(""));
console.log(solution.solve("((()))"));
console.log(solution.solve("((()"));
