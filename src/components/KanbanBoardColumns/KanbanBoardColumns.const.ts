import type { Column } from './KanbanBoardColumns.types';

export const COLUMNS: Column[] = [
  {
    label: 'TO DO',
    id: 'todo',
    color: '#94a3b8',
    textColor: '#94a3b8',
  },
  {
    label: 'IN PROGRESS',
    id: 'in-progress',
    color: '#38bdf8',
    textColor: '#38bdf8',
  },
  {
    label: 'REVIEW',
    id: 'review',
    color: '#f59e0b',
    textColor: '#f59e0b',
  },
  {
    label: 'DONE',
    id: 'done',
    color: '#39ff14',
    textColor: '#39ff14',
  },
];
