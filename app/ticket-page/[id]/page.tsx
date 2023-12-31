import TicketForm from "@/app/(components)/TicketForm";
import React from "react";

type Props = {
  params: {
    id: string;
  };
};

const getTicketById = async (id: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/Tickets/${id}`,
      {
        cache: "no-store",
      }
    );
    if (!res.ok) {
      throw new Error("Failed to get ticket");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const TicketPage = async ({ params: { id } }: Props) => {
  const EDITMODE = id === "new" ? false : true;
  let updateTicketData;

  if (EDITMODE) {
    updateTicketData = await getTicketById(id);
    updateTicketData = updateTicketData.foundTicket;
  } else {
    updateTicketData = {
      _id: "new",
    };
  }

  return <TicketForm ticket={updateTicketData} />;
};

export default TicketPage;
