import React from "react";

function ProgressDisplay({ progress }: { progress: number }) {
  return (
    <div className="w-full bg-base-100 rounded-full h-2.5">
      <div
        className="bg-accent h-2.5 rounded-full"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}

export default ProgressDisplay;
