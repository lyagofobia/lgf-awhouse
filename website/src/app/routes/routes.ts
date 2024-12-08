import { LgfComponentsComponent } from './lgf-components/components.component';
import { LgfOverviewComponent } from './lgf-overview/overview.component';
import { Route, Routes } from '@angular/router';
import { LgfThemesComponent } from './lgf-themes/themes.component';
import { LgfProjectDimensionsComponent } from './lgf-project-dimensions/project-dimensions.component';
import { LgfRetroBoardGameComponent } from './lgf-retro-board-game/retro-board-game.component';
import { LgfCinemaComponent } from './lgf-cinema/lgf-cinema.component';

const OVERVIEW_ROUTE: Route = {
    title: "Overview"
    , component: LgfOverviewComponent
    , path: ""
    , children: []
    , data: {
    }, 
};
const COMPONENTS_ROUTE: Route = {
    title: "Components"
    , component: LgfComponentsComponent
    , path: "components"
    , children: []
    , data: {
    }
};
const ANIMATIONS_ROUTE: Route = {
    title: "Animations"
    , component: LgfCinemaComponent
    , path: "animations"
    , children: []
    , data: {
    }
};
const THEMES_ROUTE: Route = {
    title: "Themes"
    , component: LgfThemesComponent
    , path: "themes"
    , children: []
    , data: {
    }
};
const PROJECT_DIMENSIONS: Route = {
    title: "Project Dimensions"
    , component: LgfProjectDimensionsComponent
    , path: "project-dimensions"
    , children: []
    , data: {
    }
};
const RETRO_BOARD_GAME: Route = {
    title: "Retro Board Game"
    , component: LgfRetroBoardGameComponent
    , path: "retro-board-game"
    , children: []
    , data: {
    }
};

export const APP_ROUTES: Routes = [
    OVERVIEW_ROUTE
    , COMPONENTS_ROUTE
    , ANIMATIONS_ROUTE
    , THEMES_ROUTE
    , PROJECT_DIMENSIONS
    , RETRO_BOARD_GAME
];