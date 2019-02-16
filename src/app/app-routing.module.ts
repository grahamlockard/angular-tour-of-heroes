import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';

const routes: Routes = [
  //  This route redirects a URL that fully matches the empty path to the route whose path is '/dashboard'.
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'heroes', component: HeroesComponent }
];

@NgModule({
  //  Initialize the router and start it listening for browser location changes.
  //  The method is called forRoot because you configure the router at the apps root level.
  //  The method supplies the service providers and directives needed for routing, and performs the initial navigation based on the current browser URL.
  imports: [ RouterModule.forRoot(routes) ],
  //  Exporting RouterModule makes router directives available for use in the AppModule components that will need them.
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
