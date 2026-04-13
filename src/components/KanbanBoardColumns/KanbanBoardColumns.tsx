import { useDroppable } from '@dnd-kit/core';
import type { Ticket } from '../KanbanBoard/KanbanBoard.types';
import type { Column } from './KanbanBoardColumns.types';
import KanbanTicketCard from '../KanbanTicketCard/KanbanTicketCard';
import {
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';

type Props = {
  column: Column;
  tickets: Ticket[];
};

export default function KanbanBoardColumns({ column, tickets = [] }: Props) {
  const { setNodeRef, isOver } = useDroppable({ id: column.id });

  return (
    <div className='flex flex-col mb-3 px-4'>
      {/* Header */}
      <div className='flex items-center justify-between'>
        <span>{column.label}</span>
      </div>

      {/* Body */}
      <div ref={setNodeRef}>
        <SortableContext
          items={tickets.map((t) => t.id)}
          strategy={verticalListSortingStrategy}
        >
          <div className='flex flex-col gap-2'>
            {tickets.map((ticket) => {
              return <KanbanTicketCard ticket={ticket} key={ticket.id} />;
            })}
          </div>
        </SortableContext>
      </div>
    </div>
  );
}
