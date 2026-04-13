export type ColumnStatus = 'todo' | 'in-progress' | 'review' | 'done';

export type Column = {
  id: ColumnStatus;
  label: string;
  color: string;
  textColor: string;
};
