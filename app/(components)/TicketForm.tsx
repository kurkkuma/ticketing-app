"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Ticket } from "@/types";

function TicketForm({ ticket }: { ticket: Ticket }) {
  const EDITMODE = ticket._id === "new" ? false : true;

  const startingTicketData = {
    title: "",
    description: "",
    priority: 1,
    progress: 0,
    status: "not started",
    category: "Hardware problem",
  };

  if (EDITMODE) {
    startingTicketData["title"] = ticket.title;
    startingTicketData["description"] = ticket.description;
    startingTicketData["priority"] = ticket.priority;
    startingTicketData["progress"] = ticket.progress;
    startingTicketData["status"] = ticket.status;
    startingTicketData["category"] = ticket.category;
  }

  const router = useRouter();
  const [formData, setFormData] = useState(startingTicketData);

  const handleChange = (e: { target: { value: any; name: any } }) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (EDITMODE) {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/Tickets/${ticket._id}`,
        {
          method: "PUT",
          body: JSON.stringify({ formData }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!res.ok) {
        throw new Error("Failed to update Ticket");
      }
    } else {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/Tickets`,
        {
          method: "POST",
          body: JSON.stringify({ formData }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!res.ok) {
        throw new Error("Failed to create Ticket");
      }
    }

    router.refresh();
    router.push("/");
  };

  return (
    <div className=" flex justify-center mb-72">
      <form
        className="flex flex-col gap-1 w-11/12 md:w-2/3 lg:w-1/2"
        method="post"
        onSubmit={handleSubmit}
      >
        <h3>{EDITMODE ? "Update your ticket" : "Create your ticket"}</h3>
        <label>Title</label>
        <input
          onChange={handleChange}
          value={formData.title}
          required={true}
          type="text"
          id="title"
          name="title"
        />
        <label>Description</label>
        <textarea
          onChange={handleChange}
          value={formData.description}
          required={true}
          id="description"
          name="description"
          rows={5}
        />
        <label>Category</label>
        <select
          name="category"
          id="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="Hardware problem">Hardware problem</option>
          <option value="Software problem">Software problem</option>
          <option value="Project">Project</option>
        </select>

        <label>Priority</label>
        <div className="flex items-center">
          <input
            className="radio radio-neutral "
            type="radio"
            id="priority"
            name="priority"
            onChange={handleChange}
            value={1}
            checked={formData.priority == 1}
          />
          <label className="radio-label">1</label>

          <input
            className="radio radio-neutral "
            type="radio"
            id="priority"
            name="priority"
            onChange={handleChange}
            value={2}
            checked={formData.priority == 2}
          />
          <label className="radio-label">2</label>

          <input
            className="radio radio-neutral "
            type="radio"
            id="priority"
            name="priority"
            onChange={handleChange}
            value={3}
            checked={formData.priority == 3}
          />
          <label className="radio-label">3</label>

          <input
            className="radio radio-neutral "
            type="radio"
            id="priority"
            name="priority"
            onChange={handleChange}
            value={4}
            checked={formData.priority == 4}
          />
          <label className="radio-label">4</label>

          <input
            className="radio radio-neutral "
            type="radio"
            id="priority"
            name="priority"
            onChange={handleChange}
            value={5}
            checked={formData.priority == 5}
          />
          <label className="radio-label">5</label>
        </div>

        <label>Progress</label>
        <input
          type="range"
          min={0}
          max={100}
          value={formData.progress}
          onChange={handleChange}
          id="progress"
          name="progress"
          className="range range-xs range-warning"
        />

        <label>Status</label>
        <select
          name="status"
          id="status"
          value={formData.status}
          onChange={handleChange}
        >
          <option value="not started">Not started</option>
          <option value="started">Started</option>
          <option value="done">Done</option>
        </select>

        <input
          type="submit"
          className="btn"
          value={EDITMODE ? "Update ticket" : "Create ticket"}
        />
      </form>
    </div>
  );
}

export default TicketForm;
