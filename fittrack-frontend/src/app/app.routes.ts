import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login';
import { RegisterComponent } from './features/auth/register/register';
import { ProgrammeListComponent } from './features/programmes/programme-list/programme-list';
import { SeanceDetailComponent } from './features/seances/seance-detail/seance-detail';
import { SeanceHistoriqueComponent } from './features/seances/seance-historique/seance-historique';
import { LandingPage } from './features/home/landing-page/landing-page';
import { authGuard } from './core/guards/auth-guard';

export const routes: Routes = [
  { path: '', component: LandingPage },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'programmes', component: ProgrammeListComponent, canActivate: [authGuard] },
  { path: 'seance-saisie', component: SeanceDetailComponent, canActivate: [authGuard] },
  { path: 'historique', component: SeanceHistoriqueComponent, canActivate: [authGuard] },
  { path: '**', redirectTo: 'login' }
];
