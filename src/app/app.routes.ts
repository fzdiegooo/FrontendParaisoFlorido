import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:"",
        loadComponent: ()=> import("./shared/components/layout/layout.component"),
        children:[
            {
                path:"inicio",
                loadComponent: ()=> import("./business/components/inicio/inicio.component")
            },
            {
                path:"sobrenosotros",
                loadComponent: ()=> import("./business/components/inicio/inicio.component")
            },
            {
                path:"contacto",
                loadComponent: ()=> import("./business/components/inicio/inicio.component")
            },
            {
                path:"info",
                loadComponent: ()=> import("./business/components/inicio/inicio.component")
            },
            {
                path:"",
                redirectTo:'inicio',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: "login",
        loadComponent: ()=> import("./business/components/auth/login/login.component")
    },
    {
        path: "dashboard",
        loadComponent: ()=> import("./business/components/dashboard/dashboard.component")
    },
    {
        path: '**',
        redirectTo: "inicio"
    }
];
