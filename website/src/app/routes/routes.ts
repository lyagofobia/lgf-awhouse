import { Type, Provider, EnvironmentProviders } from '@angular/core';
import { CanActivateChildFn, CanActivateFn, CanDeactivateFn, CanMatchFn, Data, LoadChildren, RedirectFunction, Resolve, ResolveData, ResolveFn, Route, Routes, RunGuardsAndResolvers, UrlMatcher } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';

/**
 * Implementação base de Route.
 */
export class BaseRoute implements Route {
    title?: string | Type<Resolve<string>> | ResolveFn<string>;
    path?: string;
    pathMatch?: 'prefix' | 'full';
    matcher?: UrlMatcher;
    component?: Type<any>;
    redirectTo?: string | RedirectFunction;
    outlet?: string;
    canActivate?: CanActivateFn[];
    canMatch?: CanMatchFn[];
    canActivateChild?: CanActivateChildFn[];
    canDeactivate?: CanDeactivateFn<any>[];
    data?: Data;
    resolve?: ResolveData;
    children?: Routes;
    loadChildren?: any;
    runGuardsAndResolvers?: any;
    providers?: (Provider | EnvironmentProviders)[];

    constructor(
        config:
            {
                title?: string | Type<Resolve<string>> | ResolveFn<string>;
                path?: string;
                pathMatch?: 'prefix' | 'full';
                matcher?: UrlMatcher;
                component?: Type<any>;
                redirectTo?: string | RedirectFunction;
                outlet?: string;
                canActivate?: Array<CanActivateFn>;
                canMatch?: Array<CanMatchFn>;
                canActivateChild?: Array<CanActivateChildFn>;
                canDeactivate?: Array<CanDeactivateFn<any>>;
                data?: Data;
                resolve?: ResolveData;
                children?: Routes;
                loadChildren?: LoadChildren;
                runGuardsAndResolvers?: RunGuardsAndResolvers;
                providers?: Array<Provider | EnvironmentProviders>;
            } = {}
    ) {
        this.title = config?.title;
        this.path = config?.path;
        this.pathMatch = config?.pathMatch ? config.pathMatch : 'prefix';
        this.matcher = config?.matcher;
        this.component = config?.component;
        this.redirectTo = config?.redirectTo;
        this.outlet = config?.outlet;
        this.canActivate = config?.canActivate;
        this.canMatch = config?.canMatch;
        this.canActivateChild = config?.canActivateChild;
        this.canDeactivate = config?.canDeactivate;
        this.data = config?.data;
        this.resolve = config?.resolve;
        this.children = config?.children;
        this.loadChildren = config?.loadChildren;
        this.runGuardsAndResolvers = config?.runGuardsAndResolvers;
        this.providers = config?.providers;
    }
}

const OVERVIEW_ROUTE = new BaseRoute({
    title: "Overview"
    , component: OverviewComponent
    , path: "overview"
    , children: []
});

export const APP_ROUTES: Routes = [
    OVERVIEW_ROUTE
];