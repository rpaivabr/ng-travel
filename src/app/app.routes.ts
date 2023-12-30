import { Routes } from '@angular/router';
import { InfoComponent } from './pages/info/info.component';
import { LoginComponent } from './pages/login/login.component';
import { MarkersComponent } from './pages/markers/markers.component';

export const routes: Routes = [
    { path: '', redirectTo: '/info', pathMatch: 'full' },
    { path: 'info', component: InfoComponent },
    { path: 'login', component: LoginComponent },
    { path: 'markers', component: MarkersComponent },
];
