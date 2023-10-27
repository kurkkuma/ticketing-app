import React from "react";

type Props = {
  params: {
    id: string;
  };
};

const TicketPage = ({ params: { id } }: Props) => {
  return <div>TicketPage {id} </div>;
};

export default TicketPage;
