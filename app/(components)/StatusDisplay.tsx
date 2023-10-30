import React from "react";

function StatusDisplay({ status }: { status: string }) {
  const getColor = (status: string) => {
    let color = "bg-slate-700";
    switch (status.toUpperCase()) {
      case "DONE":
        color = "bg-success";
        break;
      case "STARTED":
        color = "bg-warning";
        break;
      case "NOT STARTED":
        color = "bg-error";
        break;
    }
    return color;
  };

  return (
    <span
      className={`inline-block uppercase rounded px-2 py-1 text-xs font-semibold text-neutral ${getColor(
        status
      )}`}
    >
      {status}
    </span>
  );
}

export default StatusDisplay;
