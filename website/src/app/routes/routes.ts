import { ComponentsComponent } from './lgf-components/components.component';
import { OverviewComponent } from './lgf-overview/overview.component';
import { Route, Routes } from '@angular/router';
import { ThemesComponent } from './lgf-themes/themes.component';
import { ProjectDimensionsComponent } from './lgf-project-dimensions/project-dimensions.component';
import { RetroBoardGameComponent } from './lgf-retro-board-game/retro-board-game.component';

const OVERVIEW_ROUTE: Route = {
    title: "Overview"
    , component: OverviewComponent
    , path: "overview"
    , children: []
    , data: {
    }, 
};
const COMPONENTS_ROUTE: Route = {
    title: "Components"
    , component: ComponentsComponent
    , path: "components"
    , children: []
    , data: {
    }
};
const THEMES_ROUTE: Route = {
    title: "Themes"
    , component: ThemesComponent
    , path: "themes"
    , children: []
    , data: {
    }
};
const PROJECT_DIMENSIONS: Route = {
    title: "Project Dimensions"
    , component: ProjectDimensionsComponent
    , path: "project-dimensions"
    , children: []
    , data: {
    }
};
const RETRO_BOARD_GAME: Route = {
    title: "Retro Board Game"
    , component: RetroBoardGameComponent
    , path: "retro-board-game"
    , children: []
    , data: {
    }
};

export const APP_ROUTES: Routes = [
    OVERVIEW_ROUTE
    , COMPONENTS_ROUTE
    , THEMES_ROUTE
    , PROJECT_DIMENSIONS
    , RETRO_BOARD_GAME
];