import React from "react";
import TicketCard from "./(components)/TicketCard";
import { TicketsResponse, Ticket } from "@/types";

const getTickets = async (): Promise<TicketsResponse | undefined> => {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "";
    const res = await fetch(`${apiUrl}/api/Tickets`, {
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return res.json();
  } catch (error) {
    console.log("Failed to get tickets ", error);
  }
};

const Dashboard = async () => {
  const req = (await getTickets()) as TicketsResponse | undefined;
  const tickets: Ticket[] | undefined = req?.tickets;

  if (tickets) {
    const uniqueCategories = Array.from(
      new Set(tickets?.map(({ category }) => category)) || []
    );
    return (
      <div className="p-5">
        <div>
          {uniqueCategories?.map((uniqueCategory, index) => (
            <div className="mb-4" key={index}>
              <h2 className="text-center mb-4">{uniqueCategory}</h2>
              <div className="md:grid grid-cols-2 xl:grid-cols-4">
                {tickets
                  .filter((ticket) => ticket.category === uniqueCategory)
                  .map((ticket, _index) => (
                    <TicketCard key={_index} ticket={ticket} />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    <p className="text-center text-error">Error! Retry, please!</p>;
  }
};

export default Dashboard;
