import { type HTMLAttributes, forwardRef } from "react";
import { cn, Select } from "@mpp/core";

/* ─── Component ─── */

const perPageOptions = [
  { value: "15", label: "15" },
  { value: "30", label: "30" },
  { value: "50", label: "50" },
  { value: "100", label: "100" },
];

export interface PaginationFooterProps extends HTMLAttributes<HTMLDivElement> {
  /** Start index of current page */
  from: number;
  /** End index of current page */
  to: number;
  /** Total number of items */
  total: number;
  /** Items per page */
  perPage: number;
  /** Called when items per page changes */
  onPerPageChange?: (perPage: number) => void;
}

const PaginationFooter = forwardRef<HTMLDivElement, PaginationFooterProps>(
  ({ className, from, to, total, perPage, onPerPageChange, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex items-center gap-md", className)}
        {...props}
      >
        <span className="font-body text-base leading-normal text-text-default">
          {from}-{to} / {total} を表示中
        </span>
        <Select
          layout="inline"
          label="表示件数"
          options={perPageOptions}
          defaultValue={String(perPage)}
          onChange={(e) => onPerPageChange?.(Number(e.target.value))}
          className="w-[144px]"
        />
      </div>
    );
  },
);

PaginationFooter.displayName = "PaginationFooter";

export { PaginationFooter };
