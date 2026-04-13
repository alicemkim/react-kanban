import type { Ticket } from './KanbanBoard.types';

export const SEED_ITEMS: Ticket[] = [
  {
    id: 'seed-1',
    title: 'Escape the Citadel',
    description: 'Find a portal gun and get out ASAP',
    character: {
      id: 1,
      name: 'Rick Sanchez',
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      status: 'Alive',
      species: 'Human',
      location: { name: 'Earth' },
    },
    status: 'in-progress',
  },
  {
    id: 'seed-2',
    title: 'Research interdimensional travel',
    description: '',
    character: {
      id: 2,
      name: 'Morty Smith',
      image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
      status: 'Alive',
      species: 'Human',
      location: { name: 'Earth' },
    },
    status: 'todo',
  },
  {
    id: 'seed-3',
    title: 'Attend intergalactic school',
    description: '',
    character: {
      id: 3,
      name: 'Summer Smith',
      image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
      status: 'Alive',
      species: 'Human',
      location: { name: 'Earth' },
    },
    status: 'review',
  },
];
