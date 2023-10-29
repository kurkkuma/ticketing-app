import React from "react";

function StatusDisplay({ status }: { status: string }) {
  const getColor = (status: string) => {
    let color = "bg-slate-700";
    switch (status.toUpperCase()) {
      case "DONE":
        color = "bg-green-200";
        break;
      case "STARTED":
        color = "bg-yellow-200";
        break;
      case "NOT STARTED":
        color = "bg-red-200";
        break;
    }
    return color;
  };

  return (
    <span
      className={`inline-block uppercase rounded-full px-2 py-1 text-xs font-semibold text-gray-700 ${getColor(
        status
      )}`}
    >
      {status}
    </span>
  );
}

export default StatusDisplay;
