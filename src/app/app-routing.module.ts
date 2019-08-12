import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorizationComponent } from './components/smart/authorization/authorization.component';
import { OperatorBaseComponent } from './pages/main-page/operator-base/operator-base.component';
import { OperatorBaseGuard } from './operator-base.guard';
import { TaskComponent } from './components/dumb/task/task.component';
import { PageNotFoundComponent } from './components/dumb/page-not-found/page-not-found.component';
import { TASK, LOGIN, OPERATOR, CONTACT } from './constants/path.constans';

const routes: Routes = [
    {
        path: OPERATOR,
        component: OperatorBaseComponent,
        canActivate: [OperatorBaseGuard],
        children: [
            {
                path: CONTACT,
                children: [
                    {
                        path: '',
                        loadChildren: './components/feature/contact-tab/contact-tab.module#ContactTabModule',
                    },
                ],
            },
        ],
    },
    {
        path: TASK,
        component: TaskComponent,
        canActivate: [OperatorBaseGuard],
    },

    { path: LOGIN, component: AuthorizationComponent },
    { path: '', redirectTo: LOGIN, pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
