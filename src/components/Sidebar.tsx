import { type HTMLAttributes, forwardRef } from "react";
import { cn, Icon, IconButton, type IconName } from "@mpp/core";
import logoSvg from "../assets/logo.svg";

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
}

/* ─── Component ─── */

const Sidebar = forwardRef<HTMLElement, SidebarProps>(
  ({ className, groups, activePage, onNavigate, ...props }, ref) => {
    return (
      <aside
        ref={ref}
        className={cn(
          "w-[200px] shrink-0 bg-bg-primary-alternative flex flex-col gap-md h-screen sticky top-0",
          className,
        )}
        {...props}
      >
        {/* Logo header */}
        <div className="flex items-center justify-between pl-[16px] pr-[8px]">
          <div className="pt-[4px]">
            <img src={logoSvg} alt="My Pet +" className="w-[102px] h-[28px]" />
          </div>
          <IconButton icon="menu" size="lg" aria-label="メニュー" className="text-text-inverse" />
        </div>

        {/* Nav groups */}
        {groups.map((group) => (
          <nav key={group.title} className="flex flex-col">
            <div className="px-[16px] pb-[4px]">
              <span className="font-body font-medium text-xs leading-tight text-text-inverse">
                {group.title}
              </span>
            </div>
            {group.items.map((item) => {
              const isActive = item.page === activePage;
              return (
                <a
                  key={item.label}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (item.page && onNavigate) onNavigate(item.page);
                  }}
                  className={cn(
                    "flex items-center gap-2xs px-[16px] py-2xs",
                    isActive
                      ? "bg-bg-neutral text-[#4772b3] font-bold"
                      : "text-text-inverse font-medium",
                  )}
                >
                  <Icon name={item.icon} size={20} />
                  <span className="font-body text-lg leading-relaxed">
                    {item.label}
                  </span>
                </a>
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
