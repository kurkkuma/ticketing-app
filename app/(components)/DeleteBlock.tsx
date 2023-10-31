"use client";

import { faX } from "@fortawesome/free-solid-svg-icons/faX";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import React from "react";

function DeleteBlock({ id }: { id: string | undefined }) {
  const router = useRouter();

  const deleteTicket = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/Tickets/${id}`,
      {
        method: "DELETE",
      }
    );

    if (res.ok) {
      router.refresh();
    }
  };
  return (
    <FontAwesomeIcon
      icon={faX}
      className="text-neutral hover:cursor-pointer hover:text-error cursor-pointer transition-colors duration-300 "
      onClick={deleteTicket}
    />
  );
}

export default DeleteBlock;
