import { type HTMLAttributes } from "react";
export interface PageHeaderProps extends HTMLAttributes<HTMLElement> {
    /** Page title */
    title: string;
    /** Called when the back button is clicked */
    onBack?: () => void;
}
declare const PageHeader: import("react").ForwardRefExoticComponent<PageHeaderProps & import("react").RefAttributes<HTMLElement>>;
export { PageHeader };
