import { Course } from "./course";
export interface Term {
    year: number;
    season: "Fall" | "Spring" | "Winter" | "Summer";
    courses: Course[];
    credits: string;
}
