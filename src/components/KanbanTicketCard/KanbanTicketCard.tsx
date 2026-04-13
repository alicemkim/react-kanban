import { useSortable } from '@dnd-kit/sortable';
import type { Ticket } from '../KanbanBoard/KanbanBoard.types';

type Props = {
  ticket: Ticket;
};

export default function KanbanTicketCard({ ticket }: Props) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: ticket.id });
  return (
    <div ref={setNodeRef} {...attributes} {...listeners}>
      <div>{ticket.title}</div>
      <div>{ticket.description}</div>
    </div>
  );
}
