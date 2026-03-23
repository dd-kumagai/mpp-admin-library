import { type HTMLAttributes, forwardRef, useState } from "react";
import { cn, Icon, IconButton, Logotype, type IconName } from "@mpp/core";

/* ─── Types ─── */

export interface NavItem {
  icon: IconName;
  label: string;
  page?: string;
}

export interface NavGroup {
  title: string;
  items: NavItem[];
}

export interface SidebarProps extends HTMLAttributes<HTMLElement> {
  /** Navigation groups to render */
  groups: NavGroup[];
  /** Currently active page identifier */
  activePage?: string;
  /** Called when a nav item is clicked */
  onNavigate?: (page: string) => void;
  /** Controlled expanded state */
  expanded?: boolean;
  /** Called when expanded state changes */
  onExpandedChange?: (expanded: boolean) => void;
}

/* ─── Component ─── */

const Sidebar = forwardRef<HTMLElement, SidebarProps>(
  (
    {
      className,
      groups,
      activePage,
      onNavigate,
      expanded: controlledExpanded,
      onExpandedChange,
      ...props
    },
    ref,
  ) => {
    const [internalExpanded, setInternalExpanded] = useState(true);
    const expanded = controlledExpanded ?? internalExpanded;

    const toggleExpanded = () => {
      const next = !expanded;
      setInternalExpanded(next);
      onExpandedChange?.(next);
    };

    return (
      <aside
        ref={ref}
        className={cn(
          "shrink-0 bg-bg-primary-alternative flex flex-col gap-md h-screen sticky top-0 transition-all duration-[var(--transition-default)]",
          expanded ? "w-[200px] min-w-[200px]" : "w-auto",
          className,
        )}
        {...props}
      >
        {/* Logo header */}
        <div
          className={cn(
            "flex items-center shrink-0",
            expanded ? "justify-between pl-xs" : "justify-center",
          )}
        >
          {expanded && <Logotype height={28} color="white" alt="My Pet +" className="mt-3xs" />}
          <IconButton
            icon="menu"
            size="lg"
            aria-label="メニュー"
            className="text-text-inverse"
            onClick={toggleExpanded}
          />
        </div>

        {/* Nav groups */}
        {groups.map((group) => (
          <nav key={group.title} className="flex flex-col">
            <div className="px-xs pb-3xs">
              <span className="font-body font-medium text-xs leading-tight text-text-inverse">
                {expanded ? group.title : "\u3000"}
              </span>
            </div>
            {group.items.map((item) => {
              const isActive = item.page === activePage;
              return (
                <button
                  key={item.label}
                  type="button"
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => {
                    if (item.page && onNavigate) onNavigate(item.page);
                  }}
                  className={cn(
                    "flex items-center min-h-[40px] px-xs py-2xs cursor-pointer transition-colors duration-[var(--transition-default)]",
                    expanded ? "gap-2xs w-full" : "justify-center",
                    isActive
                      ? "bg-bg-neutral text-text-link"
                      : "text-text-inverse hover:bg-white/10",
                  )}
                >
                  <Icon name={item.icon} size={24} className="shrink-0" />
                  {expanded && (
                    <span className="font-body font-medium text-lg leading-relaxed flex-1 text-left">
                      {item.label}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        ))}
      </aside>
    );
  },
);

Sidebar.displayName = "Sidebar";

export { Sidebar };
