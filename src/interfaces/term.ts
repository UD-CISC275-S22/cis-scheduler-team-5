import { Course } from "./course";
export interface Term {
    season: "Fall" | "Spring" | "Winter" | "Summer";
    courses: Course[];
}
