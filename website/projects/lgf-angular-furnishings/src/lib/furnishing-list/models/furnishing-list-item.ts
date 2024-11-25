import { TemplateRef } from "@angular/core";

/**
 * Defines a object representing an item for the LgfFurnishingList component.
 */
export interface LgfFurnishingListItem {
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
     * Item's submenu.
     */
    submenu?: LgfFurnishingListItem[];
}