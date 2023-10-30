import React from "react";
import TicketCard from "./(components)/TicketCard";
import { TicketsResponse, Ticket } from "@/types";

const getTickets = async (): Promise<TicketsResponse | undefined> => {
  try {
    const res = await fetch("http://localhost:3000/api/Tickets", {
      cache: "no-store",
    });
    return res.json();
  } catch (error) {
    console.log("Failed to get tickets ", error);
  }
};

const Dashboard = async () => {
  const { tickets } = (await getTickets()) as TicketsResponse;

  const uniqueCategories = Array.from(
    new Set(tickets?.map(({ category }) => category)) || []
  );
  return (
    <div className="p-5">
      <div>
        {tickets &&
          uniqueCategories?.map((uniqueCategory, index) => (
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
};

export default Dashboard;
