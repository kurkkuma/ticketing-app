export interface Ticket {
  _id?: string;
  title: string;
  description: string;
  category: string;
  priority: number;
  progress: number;
  status: string;
  active: boolean;
  createdAt?: Date;
}

export interface TicketsResponse {
  tickets: Ticket[];
}
