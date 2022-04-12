import { Course } from "./course";
export type TermSeason = "Fall" | "Spring" | "Winter" | "Summer";
export interface Term {
    year: number;
    season: TermSeason;
    courses: Course[];
    credits: number;
}
