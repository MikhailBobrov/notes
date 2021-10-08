export type Mode = 'add' | 'save';

export type Task = {
    id: number;
    text: string;
    completed?: boolean;
};

// просто пример удаленного id
export type MiniTask = Omit<Task, 'id'>;
// type MiniTask1 = {
//     text: string
// }
