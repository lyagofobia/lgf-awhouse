import { MenuItem } from "../../core/menu/menu-item.model";
import { faHouse, faPaintRoller, faPuzzlePiece } from "@fortawesome/free-solid-svg-icons";

const OVERVIEW: MenuItem = {
    title: 'Overview'
    , icon: faHouse
    , link: '/overview'
};
const COMPONENTS: MenuItem = {
    title: 'Components'
    , icon: faPuzzlePiece
    , link: '/components'
};
const THEMES: MenuItem = {
    title: 'Themes'
    , icon: faPaintRoller
    , link: '/themes'
};

export const MENUS = [
    OVERVIEW
    , COMPONENTS
    , THEMES
];