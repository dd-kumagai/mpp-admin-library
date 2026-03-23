import { type HTMLAttributes } from "react";
import { type IconName } from "@mpp/core";
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
declare const Sidebar: import("react").ForwardRefExoticComponent<SidebarProps & import("react").RefAttributes<HTMLElement>>;
export { Sidebar };
