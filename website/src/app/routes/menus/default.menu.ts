import { MenuItem } from "../../core/menu/menu-item";
import { faGamepad, faMortarBoard, faPaintRoller, faPuzzlePiece } from "@fortawesome/free-solid-svg-icons";

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
const LGF_BOOTSTRAP: MenuItem = {
    title: 'lgf-bootstrap'
    , isHeading: true
    , submenu: [
        COMPONENTS
        , THEMES
    ]
};
const PROJECT_DIMENSIONS: MenuItem = {
    title: 'Project Dimensions'
    , icon: faGamepad
    , link: '/project-dimensions'
};
const RETRO_BOARD_GAME: MenuItem = {
    title: 'Retro Board Game'
    , icon: faMortarBoard
    , link: '/retro-board-game'
};
const LYAGOFOBIA_GAMES: MenuItem = {
    title: 'Lyagofobia Games'
    , isHeading: true
    , submenu: [
        PROJECT_DIMENSIONS
        , RETRO_BOARD_GAME
    ]
};

export const MENUS = [
    LGF_BOOTSTRAP
    , LYAGOFOBIA_GAMES
];