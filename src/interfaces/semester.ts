import { Course } from "./course";
export interface Semester {
    id: string;
    season: "Fall" | "Spring" | "Winter" | "Summer";
    courses: Course[];
}
