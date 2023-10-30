import { faFire } from "@fortawesome/free-solid-svg-icons/faFire";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function PriorityDisplay({ priority }: { priority: number }) {
  return (
    <div className="flex justify-start items-center ">
      <FontAwesomeIcon
        icon={faFire}
        className={`pr-1 ${priority >= 1 ? " text-error" : "text-base-100"}`}
      />
      <FontAwesomeIcon
        icon={faFire}
        className={`pr-1 ${priority >= 2 ? " text-error" : "text-base-100"}`}
      />
      <FontAwesomeIcon
        icon={faFire}
        className={`pr-1 ${priority >= 3 ? " text-error" : "text-base-100"}`}
      />
      <FontAwesomeIcon
        icon={faFire}
        className={`pr-1 ${priority >= 4 ? " text-error" : "text-base-100"}`}
      />
      <FontAwesomeIcon
        icon={faFire}
        className={`pr-1 ${priority >= 5 ? " text-error" : "text-base-100"}`}
      />
    </div>
  );
}

export default PriorityDisplay;
