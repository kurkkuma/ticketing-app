import TicketForm from "@/app/(components)/TicketForm";
import React from "react";

type Props = {
  params: {
    id: string;
  };
};

const TicketPage = ({ params: { id } }: Props) => {
  return <TicketForm />;
};

export default TicketPage;
