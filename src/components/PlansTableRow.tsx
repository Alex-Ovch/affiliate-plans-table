import React from "react";
import { TableCell } from "./TableCell";
import { PlanCell } from "./PlanCell";
import type { TableEntry } from "../types";

interface PlansTableRowProps {
  entry: TableEntry;
  months: { index: number }[];
  currentMonthIndex: number;
}

export const PlansTableRow: React.FC<PlansTableRowProps> = ({
  entry,
  months,
  currentMonthIndex,
}) => {
  return (
    <tr className="border-b border-[#D6E3EC] text-sm text-[#4F669D]">
      <TableCell>
        <span className="font-bold text-[#202F55]">{entry.adminName}</span>
      </TableCell>
      <TableCell>
        <div className="text-[#A6B1B9] text-xs">Income:</div>
        <hr className="-mx-4 my-2 border-[#D6E3EC]" />
        <div className="text-[#A6B1B9] text-xs">Active partners:</div>
      </TableCell>
      {months.map(({ index }) => {
        const month = entry.months[index];
        const isCurrentMonth = index === currentMonthIndex;

        return (
          <TableCell key={index}>
            {month ? (
              <div className="flex flex-col justify-between h-full min-h-[50px]">
                <PlanCell
                  plan={month.plan.income}
                  fact={month.fact.income}
                  isCurrentMonth={isCurrentMonth}
                />
                <PlanCell
                  plan={month.plan.activePartners}
                  fact={month.fact.activePartners}
                  isCurrentMonth={isCurrentMonth}
                  isCurrency={false}
                />
              </div>
            ) : (
              <div className="text-[#A6B1B9]">No data</div>
            )}
          </TableCell>
        );
      })}
    </tr>
  );
};
