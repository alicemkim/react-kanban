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
} from '@dnd-kit/core';
import type { DragOverEvent, DragStartEvent } from '@dnd-kit/core';
import type {
  Column,
  ColumnStatus,
} from '../KanbanBoardColumns/KanbanBoardColumns.types';
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
    const found = tickets.find((ticket) => ticket.id === active.id);
    setActiveTicket(found ?? null);
  };

  const handleDragOver = ({ active, over }: DragOverEvent) => {
    if (!over) return;

    const activeTicket = tickets.find((t) => t.id === active.id);
    const overIsCol = COLUMNS.some((c) => c.id === over.id);
    const overTicket = tickets.find((t) => t.id === over.id);
    const targetCol = overIsCol
      ? (over.id as ColumnStatus)
      : overTicket?.status;

    if (!targetCol || activeTicket?.status === targetCol) return;

    setTickets((prev) =>
      prev.map((t) => (t.id === active.id ? { ...t, status: targetCol } : t)),
    );
  };

  const handleDragEnd = () => {
    setActiveTicket(null);
  };

  const getTicketsByColumn = useCallback(
    (colId: ColumnStatus) => tickets.filter((t) => t.status === colId),
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
              tickets={getTicketsByColumn(column.id as ColumnStatus)}
              // onDelete={handleDelete}
            />
          );
        })}
      </div>
    </DndContext>
  );
}
