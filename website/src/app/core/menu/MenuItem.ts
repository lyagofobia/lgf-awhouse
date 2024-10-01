import { TemplateRef } from "@angular/core";

/**
 * Modela os items do menu.
 */
export class MenuItem {
    /**
     * Título do item. Pode ser uma string simples ou um template customizado.
     */
    title?: string | TemplateRef<any>;
    /**
     * Indica se o item é um cabeçalho.
     */
    isHeading?: boolean;
    /**
     * Link da rota que o item deve redirecionar.
     */
    link?: string;
    /**
     * Classe CSS do ícone do item. 
     */
    icon?: string;
    /**
     * Lista de submenus associados.
     */
    submenu?: MenuItem[];

    constructor(
        config:
            {
                title?: string
                isHeading?: boolean
                link?: string
                icon?: string
                submenu?: MenuItem[]
            }
    ) {
        this.title = config?.title;
        this.isHeading = config?.isHeading;
        this.link = config?.link;
        this.icon = config?.icon;
        this.submenu = config?.submenu;
    }
}