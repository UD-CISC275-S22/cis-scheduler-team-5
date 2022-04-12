export interface Course {
    //e.g CISC 275
    courseid: number;
    //e.g Introduction to Software Engineering
    name: string;
    // e.g. *course description of objectives*
    description: string;
    // e.g. CISC 181, CISC 220
    prereqs: Course[];
}
