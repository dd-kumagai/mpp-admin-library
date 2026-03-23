import { type HTMLAttributes } from "react";
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
declare const PaginationFooter: import("react").ForwardRefExoticComponent<PaginationFooterProps & import("react").RefAttributes<HTMLDivElement>>;
export { PaginationFooter };
