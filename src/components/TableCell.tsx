import React from "react";
import clsx from "clsx";

const baseCellClasses =
  "w-[150px] px-4 py-3 align-middle border-r border-[#D6E3EC]";

export const TableCell: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return <td className={clsx(baseCellClasses, className)}>{children}</td>;
};
