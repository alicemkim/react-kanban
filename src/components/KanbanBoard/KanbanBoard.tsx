import { useCallback, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchCharacters } from '../../api/characters';
import { COLUMNS } from '../KanbanBoardColumns/KanbanBoardColumns.const';
import KanbanBoardColumns from '../KanbanBoardColumns/KanbanBoardColumns';

import {
  DndContext,
  PointerSensor,
  useSensor,
  useSensors,
  DragOverlay,
  closestCorners,
  type DragStartEvent,
} from '@dnd-kit/core';
import type { ColumnStatus } from '../KanbanBoardColumns/KanbanBoardColumns.types';
import type { Ticket } from './KanbanBoard.types';
import { SEED_ITEMS } from './KanbanBoard.const';

export default function KanbanBoard() {
  const [tickets, setTickets] = useState<Ticket[]>(SEED_ITEMS);
  const [activeTicket, setActiveTicket] = useState<Ticket | null>(null);

  // Fetch the RM characters (only fetching first page)
  const {
    data: characters = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['characters'],
    queryFn: fetchCharacters,
  });

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
  );

  const handleDragStart = ({ active }: DragStartEvent) => {
    console.log('handleDragStart active: ');
    const found = tickets.find((ticket) => ticket.id === active.id);
    setActiveTicket(found ?? null);
  };

  const handleDragOver = ({ active, over }: DragOverEvent) => {
    console.log('implement me');
  };

  const handleDragEnd = ({ active, over }) => {
    console.log('Implement me');
  };

  const getTicketsByColumn = useCallback(
    (colStatus: ColumnStatus) =>
      tickets.filter((ticket) => {
        console.log({ colStatus, ticket });
        return ticket.status === colStatus;
      }),
    [tickets],
  );
  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCorners}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
    >
      <div className='flex justify-between w-full'>
        {COLUMNS.map((column) => {
          return (
            <KanbanBoardColumns
              key={column.id}
              column={column}
              tickets={getTicketsByColumn(column.status)}
              // onDelete={handleDelete}
            />
          );
        })}
      </div>
    </DndContext>
  );
}
