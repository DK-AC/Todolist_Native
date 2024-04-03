export type TaskType = {
  id: string;
  isDone: boolean;
  title: string;
};

export type TasksType = {
  [key: string]: TaskType[];
};
