import { TemplateRef } from "@angular/core";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

/**
 * Modela os items do menu.
 */
export interface MenuItem {
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
    icon?: IconDefinition;
    /**
     * Lista de submenus associados.
     */
    submenu?: MenuItem[];
}