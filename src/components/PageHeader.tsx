import { type HTMLAttributes, forwardRef } from "react";
import { cn, IconButton } from "@mpp/core";

/* ─── Component ─── */

export interface PageHeaderProps extends HTMLAttributes<HTMLElement> {
  /** Page title */
  title: string;
  /** Called when the back button is clicked */
  onBack?: () => void;
}

const PageHeader = forwardRef<HTMLElement, PageHeaderProps>(
  ({ className, title, onBack, ...props }, ref) => {
    return (
      <header
        ref={ref}
        className={cn(
          "flex items-center bg-bg-default border-b border-border-default",
          className,
        )}
        {...props}
      >
        <IconButton
          icon="chevron_left"
          size="lg"
          aria-label="戻る"
          onClick={onBack}
        />
        <h1 className="flex-1 font-heading font-bold text-h2 leading-normal text-text-default">
          {title}
        </h1>
      </header>
    );
  },
);

PageHeader.displayName = "PageHeader";

export { PageHeader };
