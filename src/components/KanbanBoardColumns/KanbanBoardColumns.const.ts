import type { Column } from './KanbanBoardColumns.types';

export const COLUMNS: Column[] = [
  {
    id: 1,
    label: 'TO DO',
    status: 'todo',
    color: '#94a3b8',
    textColor: '#94a3b8',
  },
  {
    id: 2,
    label: 'IN PROGRESS',
    status: 'in-progress',
    color: '#38bdf8',
    textColor: '#38bdf8',
  },
  {
    id: 3,
    label: 'REVIEW',
    status: 'review',
    color: '#f59e0b',
    textColor: '#f59e0b',
  },
  {
    id: 4,
    label: 'DONE',
    status: 'done',
    color: '#39ff14',
    textColor: '#39ff14',
  },
];
