import { NotfoundComponent } from './notfound/notfound.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';
import { LoginComponent } from './login/login.component';
import { TvshowComponent } from './tvshow/tvshow.component';
import { PeopleComponent } from './people/people.component';
import { NetworksComponent } from './networks/networks.component';
import { MoviesComponent } from './movies/movies.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home",canActivate:[AuthGuard],component:HomeComponent},
  {path:"about",canActivate:[AuthGuard],component:AboutComponent},
  {path:"movies",canActivate:[AuthGuard],component:MoviesComponent},
  {path:"networks",canActivate:[AuthGuard],component:NetworksComponent},
  {path:"people",canActivate:[AuthGuard],component:PeopleComponent},
  {path:"tv",canActivate:[AuthGuard],component:TvshowComponent},
  {path:"movieDetails/:id",canActivate:[AuthGuard],component:MovieDetailsComponent},
  {path:"login",component:LoginComponent},
  {path:"logout",component:LogoutComponent},
  {path:"register",component:RegisterComponent},
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule)
  },
  {path:"**",component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
