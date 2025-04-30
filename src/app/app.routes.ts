import { Routes } from '@angular/router';
import { TITLE_NAME } from './pages/app.contants';

export const routes: Routes = [
    {
        path : 'login',
        title : `Connexion - ${TITLE_NAME}`,
        loadComponent : () => import('./pages/login/login.component')
    },
{
        path : '',
        title : `${TITLE_NAME}`,
        loadComponent : () => import('./pages/home/home.component'),
        children : [
            {
                path : 'projects',
                title : `projets ${TITLE_NAME}`,
                loadComponent : ()=> import('./pages/home/projects/projects.component')
            },
            {
                path : 'contributors',
                title : `contributeurs ${TITLE_NAME}`,
                loadComponent : ()=> import('./pages/home/contributors/contributors.component'),
                children : [
                    {
                        path : 'active',
                        title : `Contributeur(s) actif(s) - ${TITLE_NAME}`,
                        loadComponent : ()=> import('./pages/home/contributors/active/active.component')
                    },
                    {
                        path : 'archived',
                        title : `Contributeur(s) archivé(s) - ${TITLE_NAME}`,
                        loadComponent : ()=> import('./pages/home/contributors/archived/archived.component')
                    },
                    {
                        path: '',
                        pathMatch: 'full',
                        redirectTo : 'active'
                    }
                ]

            },
            {
                path: '',
                pathMatch: 'full',
                redirectTo : 'projects'
            }
            
        ]
    },
    {
        path : 'project/id',
        title : `Chargement de projet... - ${TITLE_NAME}`,
        loadComponent : () => import('./pages/project/project.component')
    },
    {
        path : '',
        pathMatch : 'full',
        redirectTo : 'projects'
    },
    {
        path : '**',
        redirectTo : 'projects'
    }

];
