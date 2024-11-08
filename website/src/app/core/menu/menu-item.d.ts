import { TemplateRef } from "@angular/core";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

/**
 * Defines a menu item.
 */
export interface MenuItem {
    /**
     * Item's title. Can be a string or a custom template reference.
     */
    title?: string | TemplateRef<any>;
    /**
     * Flags if a item is a header.
     */
    isHeading?: boolean;
    /**
     * Flags if a item has its submenu collapsed.
     */
    isCollapsed?: boolean;
    /**
     * Routing link.
     */
    link?: string;
    /**
     * Item's Icon.
     */
    icon?: IconDefinition;
    /**
     * Item's submenu.
     */
    submenu?: MenuItem[];
}