export interface Todo {
    id?: string;
    completed: boolean;
    task: string;
}

export interface TodoDto {
    id: string;
    createdAt: string;
    completed: boolean;
    task: string;
    userid: string;
}
