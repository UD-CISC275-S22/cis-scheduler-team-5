import { Course } from "./course";
export interface Semester {
    id: string;
    season: string;
    courses: Course[];
}
