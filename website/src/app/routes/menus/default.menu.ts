import { MenuItem } from "../../core/menu/menu-item";
import * as FontAwesome from "@fortawesome/free-solid-svg-icons";
import * as FontAwesomeBrands from "@fortawesome/free-brands-svg-icons";


const COMPONENTS: MenuItem = {
    title: 'Components'
    , icon: FontAwesome.faPuzzlePiece
    , link: '/components'
};
const THEMES: MenuItem = {
    title: 'Themes'
    , icon: FontAwesome.faPaintRoller
    , link: '/themes'
};
const ANIMATIONS: MenuItem = {
    title: 'Animations'
    , icon: FontAwesome.faPlayCircle
    , link: '/animations'
};
const ANGULAR: MenuItem = {
    title: 'Angular'
    , icon: FontAwesomeBrands.faAngular
    , isHeading: true
    , submenu: [
        COMPONENTS
        , ANIMATIONS
        , THEMES
    ]
};
const PROJECT_DIMENSIONS: MenuItem = {
    title: 'Project Dimensions'
    , icon: FontAwesome.faDiagramNext
    , link: '/project-dimensions'
};
const RETRO_BOARD_GAME: MenuItem = {
    title: 'Retro Board Game'
    , icon: FontAwesome.faChessBoard
    , link: '/retro-board-game'
};
const LYAGOFOBIA_GAMES: MenuItem = {
    title: 'Lyagofobia Games'
    , icon: FontAwesome.faGamepad
    , isHeading: true
    , submenu: [
        PROJECT_DIMENSIONS
        , RETRO_BOARD_GAME
    ]
};

export const MENUS = [
    ANGULAR
    , LYAGOFOBIA_GAMES
];