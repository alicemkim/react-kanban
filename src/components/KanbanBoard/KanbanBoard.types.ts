// TODO: Move type file

import type { ColumnStatus } from '../KanbanBoardColumns/KanbanBoardColumns.types';

type CharacterStatus = 'Alive' | 'Dead' | 'unknown';

export type Character = {
  id: number;
  name: string;
  image: string;
  status: CharacterStatus;
  species: string;
  location: {
    name: string;
  };
};

export type Ticket = {
  id: string;
  title: string;
  description: string;
  character: Character;
  status: ColumnStatus;
};
