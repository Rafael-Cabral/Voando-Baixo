export interface IProject {
    id?: number;
    name: string;
    image?: string;
    status: "processing" | "processed";
    dt2File?: string;
    createdAt?: Date;
    updatedAt?: Date;
}