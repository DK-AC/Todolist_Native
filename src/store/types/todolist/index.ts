export type TodolistType = {
  id: string;
  title: string;
  filter: FILTER;
};

export enum FILTER {
  ALL = 'ALL',
  ACTIVE = 'ACTIVE',
  COMPLETED = 'COMPLETED',
}
