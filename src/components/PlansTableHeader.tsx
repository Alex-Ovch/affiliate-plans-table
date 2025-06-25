import React from "react";
import clsx from "clsx";

interface PlansTableHeaderProps {
  months: { label: string; index: number }[];
  currentMonthIndex: number;
}

const headerCellClass = "w-[150px] px-4 py-3 border-r border-[#D6E3EC]";
const monthHeaderCellClass =
  "w-[150px] px-4 pt-3 pb-1 text-sm border-r border-[#D6E3EC] align-bottom";
const subHeaderCellClass = "w-[150px] px-4 pt-1 pb-3 border-r border-[#D6E3EC]";

export const PlansTableHeader: React.FC<PlansTableHeaderProps> = ({
  months,
  currentMonthIndex,
}) => {
  return (
    <thead>
      <tr className="text-sm text-[#A6B1B9] bg-[#F5F7FA]">
        <th className={headerCellClass} rowSpan={2}></th>
        <th className={headerCellClass} rowSpan={2}></th>
        {months.map(({ label, index }, i) => {
          const isCurrentMonth = index === currentMonthIndex;
          const labelClass = clsx(
            "text-left text-sm",
            isCurrentMonth ? "text-[#202F55]" : "text-[#A6B1B9]"
          );
          return (
            <th key={i} className={monthHeaderCellClass}>
              <div className="flex flex-col justify-between h-full min-h-[20px]">
                <div className={labelClass}>{label}</div>
              </div>
            </th>
          );
        })}
      </tr>
      <tr className="text-xs text-[#A6B1B9] border-b border-[#D6E3EC] bg-[#F5F7FA]">
        {months.map((_, i) => (
          <th key={i} className={subHeaderCellClass}>
            <div className="flex text-xs">
              <div className="w-1/2 text-left">
                <span>Plan:</span>
              </div>
              <div className="w-1/2 text-left pl-2">
                <span>Fact:</span>
              </div>
            </div>
          </th>
        ))}
      </tr>
    </thead>
  );
};
