export interface IProject {
    id?: number;
    name: string;
    image?: string;
    status: "processing" | "processed";
    objectKey?: string;
    createdAt?: Date;
    updatedAt?: Date;
}