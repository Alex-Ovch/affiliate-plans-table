import React, { useState } from "react";
import { usePlansData } from "../hooks/usePlansData";
import { getCurrentMonthIndex, getMonthRange } from "../utils/getMonthRange";
import { TableCell } from "./TableCell";
import { PlanCell } from "./PlanCell";
import { PlansTableRow } from "./PlansTableRow";
import { PlansTableHeader } from "./PlansTableHeader";
import { PlansTableControls } from "./PlansTableControls";

export const PlansTable: React.FC = () => {
  const { data, loading } = usePlansData();
  const [startMonth, setStartMonth] = useState(0);
  const months = getMonthRange(startMonth);
  const currentMonthIndex = getCurrentMonthIndex();

  if (loading) return <p>Loading...</p>;
  if (!data) return <p>Failed to load data</p>;

  const handleLeft = () => setStartMonth((prev) => (prev + 11) % 12);
  const handleRight = () => setStartMonth((prev) => (prev + 1) % 12);

  return (
    <div className="p-6 bg-white max-w-[1440px] mx-auto">
      <div className="flex items-center text-[#202F55] text-2xl font-medium mt-6 mb-4">
        <span className="text-xl mr-2 text-[#A6B1B9] select-none">‹</span>
        Affiliate manager
      </div>
      <PlansTableControls onPrev={handleLeft} onNext={handleRight} />

      <table className="w-full text-left border border-[#D6E3EC] border-collapse table-fixed">
        <PlansTableHeader
          months={months}
          currentMonthIndex={currentMonthIndex}
        />
        <tbody>
          <tr className="border-b border-[#D6E3EC] text-sm text-[#4F669D]">
            <TableCell>
              <span className="font-medium text-[#202F55]">Manager</span>
            </TableCell>
            <TableCell>
              <div className="text-[#202F55] text-xs ">Total income:</div>
              <hr className="-mx-4 my-2 border-[#D6E3EC]" />
              <div className="text-[#202F55] text-xs">
                Total active partners:
              </div>
            </TableCell>
            {months.map(({ index }, i) => {
              const total = data.total[index];
              const isCurrentMonth = index === currentMonthIndex;
              return (
                <TableCell key={i}>
                  {total ? (
                    <div className="flex flex-col justify-between h-full min-h-[50px]">
                      <PlanCell
                        plan={total.plan.income}
                        fact={total.fact.income}
                        isCurrentMonth={isCurrentMonth}
                      />
                      <PlanCell
                        plan={total.plan.activePartners}
                        fact={total.fact.activePartners}
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

          {data.table.map((entry) => (
            <PlansTableRow
              key={entry.id}
              entry={entry}
              months={months}
              currentMonthIndex={currentMonthIndex}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
