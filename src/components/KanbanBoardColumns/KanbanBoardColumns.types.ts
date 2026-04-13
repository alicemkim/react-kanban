export type ColumnStatus = 'todo' | 'in-progress' | 'review' | 'done';

export type Column = {
  id: number;
  status: ColumnStatus;
  label: string;
  color: string;
  textColor: string;
};
