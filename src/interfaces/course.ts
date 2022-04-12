export interface Course {
    name: string;
    id: number;
    description: string;
    prereqs: Course[];
}
