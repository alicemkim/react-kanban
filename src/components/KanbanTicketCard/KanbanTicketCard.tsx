import type { Ticket } from '../KanbanBoard/KanbanBoard.types';

type Props = {
  ticket: Ticket;
};

export default function KanbanTicketCard({ ticket }: Props) {
  return (
    <div>
      <div>{ticket.title}</div>
      <div>{ticket.description}</div>
    </div>
  );
}
