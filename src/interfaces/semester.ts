import { Course } from "./course";
export interface Semester {
    season: "Fall" | "Spring" | "Winter" | "Summer";
    courses: Course[];
}
