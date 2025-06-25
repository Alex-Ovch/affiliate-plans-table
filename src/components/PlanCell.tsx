import React from "react";
import { formatCurrency } from "../utils/formatters";
import clsx from "clsx";

interface PlanCellProps {
  plan: number;
  fact: number;
  isCurrentMonth: boolean;
  isCurrency?: boolean;
}

export const PlanCell: React.FC<PlanCellProps> = ({
  plan,
  fact,
  isCurrentMonth,
  isCurrency = true,
}) => {
  const format = isCurrency ? formatCurrency : (v: number) => v.toString();

  const planClass = clsx(
    "w-1/2 text-left",
    isCurrentMonth ? "text-black font-medium" : "text-[#A6B1B9] font-medium"
  );

  const factClass = clsx(
    "w-1/2 text-left pl-2",
    isCurrentMonth ? "text-black font-medium" : "text-[#A6B1B9] font-medium"
  );

  return (
    <div className="flex text-xs">
      <div className={planClass}>
        <span>{format(plan)}</span>
      </div>
      <div className={factClass}>
        <span>{format(fact)}</span>
      </div>
    </div>
  );
};
