import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanineHomeComponent } from './canine-home/canine-home.component';
import { CanineListComponent } from './canine-list/canine-list.component';
import { CanineDetailComponent } from './canine-detail/canine-detail.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: '', redirectTo: '/canine-home', pathMatch: 'full' },
  {
    path: 'canine-home',
    component: CanineHomeComponent
  },
  {
    path: 'canine-list/:letter',
    component: CanineListComponent
  },
  {
    path: 'canine-detail/:id',
    component: CanineDetailComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'search',
    component: SearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
