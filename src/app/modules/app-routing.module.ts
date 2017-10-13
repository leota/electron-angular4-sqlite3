import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { CreateCommunityComponent } from '../create-community/create-community.component';
import { CommunityDetailComponent } from '../community-detail/community-detail.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'create-community', component: CreateCommunityComponent },
    { path: 'community-detail/:name', component: CommunityDetailComponent },
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }