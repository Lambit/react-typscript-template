import { FC } from 'react';

import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard'

/* 

FC = Functional Componant---Routes are started here, through
an interface "Route", that is placed in an array and exported.

*/ 

interface Route {
    key: string,
    title: string,
    path: string,
    enabled: boolean,
    component: FC<{}>
}

export const routes: Array<Route> = [
    {
        key: 'home-route',
        title: 'Home',
        path: '/',
        enabled: true,
        component: Home
    },
    {
        key: 'dash-route',
        title: 'Dashboard',
        path: '/dash',
        enabled: true,
        component: Dashboard
    },
]